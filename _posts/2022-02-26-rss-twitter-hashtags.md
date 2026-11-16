---
title: "How to use RSS to get updates from Twitter hashtags"
date: 2022-02-26 05:37:06 +0000
gist: https://gist.github.com/mlliarm/6ee5e47c8c8e496fa4684669c3520e3f
---

## Websites

- https://feeder.co/knowledge-base/rss-feed-creation/twitter-rss-feeds/
- https://www.tecmint.com/best-rss-feed-readers-for-linux/

## Tools

From the above websites I found after some testing that the most reliable and useful in the 'free' tier are:

- https://rss.app/ (to convert the Twitter links to `xml` RSS files)
- [Quiterss](https://quiterss.org/) the open source client where from you'll be reading the RSS feeds

## How

- First create an account at https://rss.app/ . Mind you, it seems that when you create it you're enlisted in the first paid plan, the "premium" package. The trial lasts 7 days. The advantages of the "premium" package over the "free" package are:
  - `Premium`: **40 RSS Feeds**, 4 Widgets, 4 Email Digest, **30 Minute Refresh Rate**, 25 Posts in Collection, Up to 25 posts Per Feed, Link to Source, Social Media, Custom Widgets, Bundle Feeds, Filters, Email Support.
  - `Free`: **2 RSS feeds**, 1 Widgets, **24 Hour Refresh Rate**, Up to 5 Posts Per Feed, Link to RSS.app / Ads.
  - The disadvantages of the "premium" package are that it costs $9.99/month (monthly subscription) or $8.32/month (annual subscription).
- Then copy paste the Twitter URL, say of a specific hashtag search result ([example](https://twitter.com/search?q=Ukrainian&src=trend_click&f=live&vertical=trends)).
- Then go to the rss.app page and press the "+New Feed" button on top right.
- Choose "Twitter RSS Feed".
- Then you'll be redirected to a new page. Copy the URL ending with an `.xml` file under the "Your feed is ready".
- [Download](https://quiterss.org/en/download) and install the QuiteRSS client.
- Open the QuiteRSS app. Press the "+" symbol on top left and press continue/okay.

Congrats, now you're getting the Tweets for your selected hashtags in the RSS feed reader every 30 minutes (premium package) or every 24h (free package).
