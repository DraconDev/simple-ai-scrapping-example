import { writeFileSync } from "fs";

export function writeOutput(parsedResponse: any) {
  if (parsedResponse.monthly_views) {
    // Save monthly views to a text file
    writeFileSync(
      "monthly_views.txt",
      `Channel Name: ${parsedResponse.channel_name},
       Monthly Views: ${parsedResponse.monthly_views},
       Monthly Subscribers: ${parsedResponse.monthly_subscribers},
       Subscriber Count: ${parsedResponse.subscriber_count},
       Total Views: ${parsedResponse.total_views},
       Estimated Revenue: ${parsedResponse.estimated_revenue},
      `
    );
    console.log("Monthly views saved to monthly_views.txt");
  }
}
