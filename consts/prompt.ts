// Extract monthly views using AI
export function createAiPrompt(textContent: string) {
  const aiPrompt = `Extract all the requested fields from this YouTube channel analytics page content. Return only the monthly views number as a JSON object:
  
  Example output:
  {"monthly_views": 1234567, "channel_name": "ididathing", subscriber_count: 1234567, estimated_revenue: 1234567, total_views: 1234567, monthly_views: 1234567, monthly_subscribers: 1234567}

  Page content:
  ${textContent}`;
  return aiPrompt;
}
