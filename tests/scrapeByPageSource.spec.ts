import { test, expect } from "@playwright/test";
import { promtAI } from "../lib/gemini";
import { parseResponse } from "../lib/parseResponse";
import { createAiPrompt } from "../consts/prompt";
import { writeOutput } from "../lib/writeOutput";

test("scrapeByPageSource", async ({ page }) => {
  // Navigate to the target page
  await page.goto("https://www.viewstats.com/@ididathing/channelytics");
  // Wait for 1 second
  await page.waitForTimeout(2000);
  // Get the full HTML content

  // Get all visible text content
  const htmlContent = await page.content();

  expect(htmlContent.length).toBeGreaterThan(0);

  const aiPrompt = createAiPrompt(htmlContent);

  try {
    const aiResponse = await promtAI(aiPrompt);
    const parsedResponse = await parseResponse(aiResponse);

    writeOutput(parsedResponse);
  } catch (error) {
    console.error("Error processing content with AI:", error);
  }
});
