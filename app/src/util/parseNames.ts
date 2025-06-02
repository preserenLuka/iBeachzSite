const BADGE_PATTERNS: RegExp[] = [
  // Cheer badges
  /^cheer \d+/i,
  /^\d{1,3}(,\d{3})* Bit Badge/i,

  // Subscriber badges
  /^(\d+)-Month Subscriber/i,
  /^(\d+)-Year Subscriber/i,
  /^Subscriber Founding Member/i,
  /^Founder Badge/i,
  /^Founder/i,
  /^Sub Badge - Tier \d+/i,
  /^- Tier \d+OGViewer/i, // Added missing pattern

  // Gifter / Leaderboard
  /^Gift(ed)? Sub/i,
  /^Gifter Leader \d+/i,
  /^Bits Leader \d+/i,
  /^Clips Leader \d+/i,

  // Hype Train
  /^Hype Train Level \d+ Conductor/i,
  /^Current Hype Train Conductor/i,
  /^Former Hype Train Conductor/i,
  /^Hype Train Badge/i,

  // Events / Recap / Anniversary
  /^Twitch \d+-Year Anniversary/i,
  /^Twitchiversary Badge/i,
  /^Anniversary Subscriber/i,
  /^Returning Subscriber/i,
  /^Returning .+/i,
  /^Twitch Recap \d{4}/i,
  /^SUBtember \d{4}/i,
  /^ZEVENT \d{4}/i,

  // Charity / Drops
  /^Charity Badge/i,
  /^Charity Streamer/i,
  /^Drops Enabled/i,
  /^Twitch Drops/i,

  // Roles / Staff
  /^Twitch Staff/i,
  /^Broadcaster/i,
  /^Partner/i,
  /^Ambassador/i,
  /^DJ/i,
  /^VIP/i,
  /^Moderator/i,
  /^Chat Moderator/i,
  /^AutoMod/i,

  // Creators / Artists / Devs
  /^Artist Badge/i,
  /^Artist/i,
  /^Emote Artist/i,
  /^Developer Badge/i,
  /^Game Developer/i,

  // Bots
  /^Bot/i,
  /^Verified Bot/i,

  // Turbo / Prime
  /^Turbo User/i,
  /^Turbo/i,
  /^Prime Gaming User/i,
  /^Prime Gaming/i,

  // Viewing Modes
  /^Watching without (Video|Audio)/i,
  /^Listening only/i,
];

const BADGE_PREFIXES = ["Custom Channel Special Badge", "SuperUltraCombo 2023"];

// 3. Stripping function
function stripBadges(name: string): string {
  let changed = true;
  while (changed) {
    changed = false;
    // Regex patterns
    for (const pattern of BADGE_PATTERNS) {
      const match = name.match(pattern);
      if (match) {
        name = name.slice(match[0].length).trim();
        changed = true;
      }
    }
    // Custom badge prefixes
    for (const prefix of BADGE_PREFIXES) {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        name = name.slice(prefix.length).trim();
        changed = true;
      }
    }
  }
  return name;
}

// 4. Usage in parseNames
export function parseNames(input: string): string[] {
  return input
    .split(/\r?\n/) // Split by every line
    .map((line) => stripBadges(line.trim()))
    .filter((name) => name && name.toLowerCase() !== "this minute");
}
