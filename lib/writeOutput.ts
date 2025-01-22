import { writeFileSync } from "fs";

export function writeOutput(parsedResponse: any) {
  if (!parsedResponse.monthly_views) {
    throw new Error("Invalid response format - missing monthly_views");
  }

  try {
    const outputData = {
      timestamp: new Date().toISOString(),
      channel_name: parsedResponse.channel_name,
      monthly_views: parsedResponse.monthly_views,
      monthly_subscribers: parsedResponse.monthly_subscribers,
      subscriber_count: parsedResponse.subscriber_count,
      total_views: parsedResponse.total_views,
      estimated_revenue: parsedResponse.estimated_revenue,
    };

    // Write as JSON with pretty formatting
    writeFileSync("monthly_views.txt", JSON.stringify(outputData, null, 2));

    console.log("Successfully saved monthly views to monthly_views.txt");
  } catch (error) {
    console.error("Failed to write output:", error);
    throw error;
  }
}
