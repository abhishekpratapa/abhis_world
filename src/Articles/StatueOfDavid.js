import React from 'react';
import { ArticleType, ArticleTemplate } from "./ArticleTemplate"
import "./ArticleTemplate.css";

export default class StatueOfDavid extends ArticleTemplate {
  identifier() {
    return "statue_of_david";
  }
  
  title() {
    return "Statue of David";
  }

  date() {
    return new Date("November 13 2019 20:25");
  }

  type() {
    return [
      ArticleType.PERSONAL
    ];
  }

  content() {
    return (
      <div>
        <p className={"ArticleContentParagraph"}>
          Since 2014 I've been trying to gain weight. I set a goal of 165lbs. I still haven't made it yet.
        </p>
        <p className={"ArticleContentParagraph"}>
          At the age of 19, my bodyweight was a scrawny 117lbs. I'd never lifted weights before, so even squatting and benching the bar was difficult for me.
        </p>
        <p className={"ArticleContentParagraph"}>
          Weightlifting was something different I'd never tried. For me, eating was the hardest part. I could never seem to stuff enough food into my stomach.
        </p>
        <p className={"ArticleContentParagraph"}>
          After a couple of months of continually going to the gym, I'd maxed out on the scale at 135 lbs. Barely. I felt bloated, but it put a smile on my face. I'd done it.
        </p>
        <p className={"ArticleContentParagraph"}>
          That next year I'd move to an apartment, and I had to cook for myself. Honestly, it was one of the hardest things that I had to learn. Honestly, I never did, so I dropped back down to measly 124lbs and stayed that way until my college graduation in 2017.
        </p>
        <p className={"ArticleContentParagraph"}>
          After getting my current job. I had the money to experiment. I bought all the supplements I could, all of the weight gain powders and hit the gym 60-90 minutes a day. And it kinda worked. Over that next year, I went from 124lbs to 138lbs. I managed to stay lean throughout the whole process. Progress!
        </p>
        <p className={"ArticleContentParagraph"}>
          I would ultimately get a nasty bug. Not work out for a couple of months, and my weight dropped all the way down to 128lbs again. Habits. Slow to build, fast to die.
        </p>
        <p className={"ArticleContentParagraph"}>
          I let it go for a while to focus on life, teaching myself how to cook and deal with a couple of mental issues that arose after college. No-one ever tells you how different life is after college.
        </p>
        <p className={"ArticleContentParagraph"}>
          But after a couple more months, I decided to have one last hurrah, and over 3 months, I'd manage to get to a weight of 148lbs. I really wanted to hit that 150lbs mark.
        </p>
        <p className={"ArticleContentParagraph"}>
          Ultimately just like last year, I caught a bug and am now down to 136lbs.
        </p>
        <p className={"ArticleContentParagraph"}>
          From the end of 2014 to the end of 2019, I gained a cumulative total of 1 pound. But I learned some crucial things doing something outside my area of expertise.
        </p>
        <p className={"ArticleContentParagraph"}>
          I learned to cook. I learned about schedules. I learned to wake up and put myself first, something I wasn't used to. I learned about proper exercise form.
        </p>
        <p className={"ArticleContentParagraph"}>
          At my max, I was benching 185lbs and squatting 245lbs for 5 reps, a far cry from just the bar from 2014. I didn't look at it, but that didn't matter. I had the strength I just didn't show it, and that was a consequence of not eating. At least I knew.
        </p>
        <p className={"ArticleContentParagraph"}>
          There was also a meta-learning. Systems can last, willpower requires vigilance. Converting willpower to habit is the key to building upon anything. Learning to build a foundation is key to building upon that foundation.
        </p>
        <p className={"ArticleContentParagraph"}>
          At first, I tried anything and everything I could to gain muscle, I was obsessed, possessed. But that didn't last, sickness derailed me, I got worn out, I got hurt. So the next time, I built a framework to counteract my failure. And something-else was the issue. So I updated my framework, and I got even further.
        </p>
        <p className={"ArticleContentParagraph"}>
          In life, it's so easy to judge failure, especially when comparing yourself to the signals that we see in social media. I got lost in the noise for some time, as well. I asked myself, should I try steroids, but the thought quickly left my mind. This wasn't about getting there as fast as I could. This was about solving a challenge with constraints. To rise above what I thought I could do.
        </p>
        <p className={"ArticleContentParagraph"}>
          Sometimes when we race toward a finish line, we don't stop to look at the stars or swim with the dolphins. I didn't get to my goal of 165lbs. I'm still pushing for it. But rather than wearing myself out and never reaching my goal, I'll take my time slowly chipping away at my statue of David. Thoughts?
        </p>
        {/* TODO: attach a sign up to my email list here */}
      </div>
    );
  }
}
