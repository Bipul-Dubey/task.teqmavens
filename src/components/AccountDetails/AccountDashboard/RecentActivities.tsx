import { CustomTabs } from "@/components/common/CustomTabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

// Type definitions
interface Reply {
  from: string;
  message: string;
  quote: string;
  time: string;
}

interface ActivityContent {
  primary: string;
  action: string;
  secondary: string;
  time: string;
  replies?: Reply[];
}

interface Activity {
  icon: {
    bg: string;
    src: string;
  };
  content: ActivityContent[];
}

interface RecentActivitySection {
  date: string;
  activities: Activity[];
}

const recentActivities: RecentActivitySection[] = [
  {
    date: "TODAY",
    activities: [
      {
        icon: { bg: "bg-[#F4A120]", src: "/chat-1-fill.svg" },
        content: [
          {
            primary: "Christian Wood",
            action: "Sent Message to",
            secondary: "Nikita Houston",
            time: "1 min ago",
            replies: [
              {
                from: "Nikita Houston",
                message: "Replay your message",
                quote: '"Hello"',
                time: "1 min ago",
              },
            ],
          },
        ],
      },
      {
        icon: { bg: "bg-[#E24C5B]", src: "/chat-1-fill.svg" },
        content: [
          {
            primary: "Christian Wood",
            action: "Accept Order from",
            secondary: "Ebay",
            time: "1 min ago",
            replies: [
              {
                from: "Rohan Walker",
                message: "Replay your message",
                quote: "Ebay",
                time: "1 min ago",
              },
              {
                from: "Rohan Walker",
                message: "Replay your message",
                quote: "Ebay",
                time: "1 min ago",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "YESTERDAY",
    activities: [
      {
        icon: { bg: "bg-[#8e57e1]", src: "/chat-1-fill.svg" },
        content: [
          {
            primary: "Christian Wood",
            action: "Accept Order from",
            secondary: "Amazon",
            time: "12:30PM",
          },
        ],
      },
    ],
  },
  {
    date: "25 MAY 2024",
    activities: [
      {
        icon: { bg: "bg-[#2C8DFB]", src: "/chat-1-fill.svg" },
        content: [
          {
            primary: "Christian Wood",
            action: "Accept Order from",
            secondary: "Walmart",
            time: "11:20AM",
          },
        ],
      },
      {
        icon: { bg: "bg-[#2C8DFB]", src: "/chat-1-fill.svg" },
        content: [
          {
            primary: "Christian Wood",
            action: "Accept Order from",
            secondary: "Esty",
            time: "01:30PM",
          },
        ],
      },
    ],
  },
];

const RecentActivities: React.FC = () => {
  return (
    <Card className="w-full gap-0 max-h-[500px] md:w-full lg:w-[49.2%] min-w-md p-0 bg-b-background">
      <CardHeader className="p-4 py-2 flex justify-between items-center border-b-2">
        <CardTitle className="text-lg font-semibold text-foreground">
          Recent Activities
        </CardTitle>
        <CustomTabs tabs={["message", "email"]} />
      </CardHeader>
      <CardContent className="space-y-6 py-4 max-h-[450px] overflow-x-auto scrollbar-hide">
        {recentActivities.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              {section.date}
            </div>
            {section.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="flex gap-3">
                <div className="relative">
                  <div
                    className={`w-6 h-6 flex items-center justify-center ${activity.icon.bg} rounded-full`}
                  >
                    <img
                      src={activity.icon.src}
                      className="w-4 h-4"
                      alt="icon"
                    />
                  </div>
                  {activityIndex === 0 && sectionIndex === 0 && (
                    <div className="absolute left-1/2 top-6 h-10 w-px -translate-x-1/2 bg-border" />
                  )}
                </div>
                <div className="space-y-1">
                  {activity.content.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <div className="text-sm text-foreground">
                        <span className="font-medium text-highlight-blue">
                          {item.primary}
                        </span>{" "}
                        {item.action}{" "}
                        <span className="font-medium text-highlight-blue">
                          {item.secondary}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          • {item.time}
                        </span>
                      </div>
                      {item.replies?.map((reply, replyIndex) => (
                        <div
                          key={replyIndex}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-6 h-6 flex items-center justify-center bg-muted rounded-full">
                            <img
                              src="/back-2-fill.svg"
                              className="w-4 h-4"
                              alt="reply icon"
                            />
                          </div>
                          <div>
                            <span className="font-medium text-highlight-blue">
                              {reply.from}
                            </span>{" "}
                            {reply.message}{" "}
                            <span className="text-highlight-blue">
                              {reply.quote}
                            </span>{" "}
                            • {reply.time}
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
