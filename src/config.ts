export const config = {
  UPDATE_INTERVAL: 60 * 1, // 1 minute in seconds
  PRICE_DECIMAL_PLACES: 2,
  DEFAULT_GUILD_ID: "1231790358988455986",
  REWARDS_CHECK_INTERVAL: 60 * 1, // 1 minute in seconds
  REWARDS_NOTIFICATION_CHANNEL: "1087064876930838590",
  REWARDS_NOTIFICATION_THRESHOLD: 60, // Notify when less than 60 seconds remaining
  POSITION_CHECK_INTERVAL: 60, // Check positions every minute
  POSITION_NOTIFICATION_CHANNEL: "1364754057184411649" // Channel ID for position notifications
} as const;
