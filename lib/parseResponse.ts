export async function parseResponse(text: string) {
  try {
    // First try direct JSON parse
    const directParse = await JSON.parse(text);
    if (!directParse.monthly_views) {
      throw new Error("Missing monthly_views key");
    }
    return directParse;
  } catch (e1) {
    const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      try {
        const markdownParse = JSON.parse(jsonMatch[1]);
        if (!markdownParse.monthly_views) {
          throw new Error("Missing monthly_views key");
        }
        return markdownParse;
      } catch (e2) {
        // Save failed parse attempt
        throw new Error(
          `Failed to parse JSON: ${e1.message} and ${e2.message}`
        );
      }
    }
    throw new Error("Failed to parse JSON");
  }
}
