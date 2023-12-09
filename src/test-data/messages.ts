import type { Message } from "~/components/message-list/message-list";

const tableMD = `
| Month     | Sales 2023 | Sales 2022 | Sales 2021 |Sales 2020 | Sales 2020 |
|-----------|------------|------------|------------|------------|------------|
| January   | 12,000 | 10 | 9 | 9 | 9 |
| January   | 12,000 | 10 | 9 | 9 | 9 |
| January   | 12,000 | 10 | 9 | 9 | 9 |
| January   | 12,000 | 10 | 9 | 9 | 9 |

`;

const markdownData = `## Response\n\n
**Summary:**\n
This week's Daily Active Users (DAU) have shown a notable increase of <font
color="lt-cyan">18%</font> compared to last week.\n\n
**Detailed Breakdown:**\n
- This Week: 26,000 DAU <font color="lt-cyan">(↑18% from the previous week)</font>\n - Last Week: 22,000 DAU\n\n
**Key Insights:**\n
Growth: An <font color="lt-cyan">18%</font> increase in DAU compared to last week reflects a
growing user base and heightened engagement.\n\n\n\n\n${tableMD}`;

export const messages: Message[] = [
  {
    type: "user",
    data: {
      textContent:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
  },
  {
    type: "bot",
    data: {
      textContent: markdownData,
      charData: [],
    },
  },
];
