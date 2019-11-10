import React from 'react';
import { ArticleType, ArticleTemplate } from "./ArticleTemplate"
import "./ArticleTemplate.css";

export default class Communication extends ArticleTemplate {
  title() {
    return "Communication";
  }

  date() {
    return new Date("November 10 2019 12:18");
  }

  type() {
    return [
      ArticleType.TECH,
      ArticleType.EXISTENTIAL,
      ArticleType.PERSONAL,
    ];
  }

  content() {
    return (
      <div>
        <p className={"ArticleContentParagraph"}>
            The story of computers isn't about techies. It isn't about anti-social behavior either. It isn't entirely about VC or serial entrepreneurship. I could be about money, but that's mostly a consequence. It's about understanding thy neighbor and making this thing we call communication a little easier.
        </p>
        <p className={"ArticleContentParagraph"}>
            Science fiction usually holds the answers to our short-comings as a society. Whether exaggerating the negatives by portraying a dystopian future or optimistically predicting a space-faring civilization, it gives us a lens into what our future could be.
        </p>
        <p className={"ArticleContentParagraph"}>
            I tend to be drawn toward comic-cons because they paint a picture of a society far different technologically yet very similar from a human sense to our own. The key to predicting the future isn't throwing out the past. The key is understanding that some things never change. The key is understanding that there are fundamental truths and that the past does matter.
        </p>
        <p className={"ArticleContentParagraph"}>
            To understand human communication, we must understand history. 
        </p>
        <p className={"ArticleContentParagraph"}>
            Communication was an evolutionary trait that allowed humans to build upon their predecessors. Some of the lessons learned from the previous generations could be passed into future offspring to further their chances of survival. The best form of communicating this information was through stories. Stories about power, about the fear of the unknown. Stories to get people to upon a common goal. Stories to inspire action and similar beliefs. For millennia stories were limited in their ability to reach massive audiences.
        </p>
        <p className={"ArticleContentParagraph"}>
            Word of mouth is tricky. Words can mean many things to many people. So when stories are passed by voice, each storyteller usually puts their own twist to the story. This overtime evolves into stories that never actually ended up happening.
        </p>
        <p className={"ArticleContentParagraph"}>
            So we created written language. If we write down the communication, the story has less of a tendency to change. But writing is slow, It solves the problem of reach but not speed. It takes time to print something and transport it to a different place. So we invented a solution to this problem.
        </p>
        <p className={"ArticleContentParagraph"}>
            When the first transatlantic telegraph line was laid in 1858, it was far from perfect. The first one functioned for less than a week, but it proved a point.
        </p>
        <p className={"ArticleContentParagraph"}>
            See, before 1958, communication between Europe and the United States took ten days. The delay could pose a bit of a problem, especially in hard situations. Making decisions is hard without an open "line of communication." After 1958 the world saw what could be. Arguments and disagreements could be resolved in a matter of minutes rather than days. It was a profound experience and made the world a smaller place.
        </p>
        <p className={"ArticleContentParagraph"}>
            Fast-forward to today, we take for granted the amount of power we have at our finger-tips. Being able to pick up a phone and video call someone halfway across the world wasn't a thing that even existed in the minds of average people only a century ago. Hearing someone's voice through this magical contraption called a phone, still blew the minds of the common folk.
        </p>
        <p className={"ArticleContentParagraph"}>
            The story of the computer isn't that of a nerd. It's an evolutionary extension to self-expression. A tangible way to communicate ideas effectively and quickly. Sure the nerds were the first adopters. They might not have cared as much about the crappy user experience initially. But over time, people worked to make the experience more intuitive and understandable.
        </p>
        <p className={"ArticleContentParagraph"}>
            In-fact the nerds pay homage to the storyteller. It was the futurists that imagined the limitless possibility of futures, including a fate similar to the one we have today. It was the futurist that went against the norm to push a reality that didn't exist. Their willingness to potentially be ostracized by society, to be shunned and labeled as crazy, is admirable.
        </p>
        <p className={"ArticleContentParagraph"}>
            Maybe all of us were futurists. Imagining a future that could have been. Perhaps we were told that we were crazy and didn't understand the way things worked. All of this is just a way for us to find out voice. Some of us simply do that differently than others. Thoughts?
        </p>
        {/* TODO: attach a sign up to my email list here */}
      </div>
    );
  }
} 