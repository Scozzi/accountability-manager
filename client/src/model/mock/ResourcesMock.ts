import LocalApplicationResource from "@/model/LocalApplicationResource";
import WebsiteResource from "@/model/WebsiteResource";

export default [
    new LocalApplicationResource('pomodoro', `/Applications/Be Focused Pro.app`, { executeTime: 25 } ), 
    new WebsiteResource('google', `https://www.google.com`, { randomParam: "blah" } ),
    new WebsiteResource('ac-turnips',`https://ac-turnip.com`),
    new WebsiteResource('reddit', `www.reddit.com`, { highDistraction: true }),
    new WebsiteResource('gmail', 'www.gmail.com', { productivity: true })
];