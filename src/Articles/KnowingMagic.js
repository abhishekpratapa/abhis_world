import React from 'react';
import { ArticleType, ArticleTemplate } from "./ArticleTemplate"
import "./ArticleTemplate.css";

export default class KnowingMagic extends ArticleTemplate {
  title() {
    return "The Perils of Magic";
  }

  date() {
    return new Date("November 10 2019 9:12");
  }

  type() {
    return [
      ArticleType.CREATIVE,
      ArticleType.TECH,
      ArticleType.LEARNING,
    ];
  }

  content() {
    return (
      <div>
        <p className={"ArticleContentParagraph"}>
          To be a magician you need to understand magic. Then it isn't magic anymore, is it?
        </p>
        <p className={"ArticleContentParagraph"}>
          Growing up I've always watched magicians in awe. They did things I thought were impossible. For instance, the first time I saw someone levitate themselves or get cut in half, my brain went nuts. This was not supposed to be normal. Like this shouldn't be happening.  I loved it and I had this insatiable need to understand it. Like a part of me wanted to be that magician. So, I'd always try to figure out a couple of possible solutions before I googled the actual act. It usually involved a series of trap doors, false bottoms and optical illusions.  Sometimes I was right but often my solution was very different, though not incorrect.  After a while, it became easy to figure out this magic.
        </p>
        <p className={"ArticleContentParagraph"}>
          This antisocial, yet observant behavior kept on going for the better part of a decade. It didn't win me any popularity points but it did lead me to the field of computer science. See I'd joined college as a Mechanical Engineer, because why not, and I'd gotten obsessed at understanding computers.
        </p>
        <p className={"ArticleContentParagraph"}>
          See, there the magic wasn't so trivial. I would push a series of buttons. The display would change, and someone halfway around the world can somehow talk to me. And we all just trust that this works. So very few people know how some electrons moving around in some metal parts run the world. So ya, I was obsessed, even as a mechanical engineer. If magicians got me going, this kept me up at night.
        </p>
        <p className={"ArticleContentParagraph"}>
          It was in June of 2015 that my whole world would turn on its head. It's the month that I learned how computers worked. I'd done a series of sneaky things to get into Computer Architecture. First I dropped my major. Then I applied to the Computer Science school and got in. Finally, I begged my advisor to put me back into Mechanical Engineering. Easy.
        </p>
        <p className={"ArticleContentParagraph"}>
          So, sitting through the first couple of lectures, we learned about communication. How the telegraph and morse code were invented. How morse code is a version of binary; The code consists of sequences of long dashes and short dots and is transmittable via electric cables. How vacuum tubes and relays worked, and how they were just electrical switches. How the transistor changed and miniaturized everything. How CMOS made personal computing possible. How processors were designed with registers and ALUs and Cache. How these things were pipelined so that many things could happen at once. How branch-prediction was created to help optimize this pipelining. How memory works. How peripherals communicate with the ALU. What op-codes are. How assembly can be converted into op-codes. How C can be compiled into assembly code. How an operating system has privileged functions on a CPU. How virtual and physical memory work. How to write page tables. How to create a kernel. How to create drivers...
        </p>
        <p className={"ArticleContentParagraph"}>
          If I didn't lose you then either you know your stuff or are an electrical and computer engineer, which implies you know your stuff.
        </p>
        <p className={"ArticleContentParagraph"}>
          But it wasn't magic anymore. It was codified into a set of first principles. Switches flipped, knobs turned. In-fact it seemed elegant. Like it was meant to be.
        </p>
        <p className={"ArticleContentParagraph"}>
          To this day I wonder if I should have learned it at all. Perhaps I could have spent more time asking myself how I would have built a computer. If I would have come up with an ALU or Registers at all. How I would think about storing data in memory. If I would even have memory.
        </p>
        <p className={"ArticleContentParagraph"}>
          Understanding magic is a double-edged sword. Knowing the one-way computer's work has limited me from thinking about other ways history could have played out. So take other's advice with a grain of salt including mine (Which I graciously and in an unsolicited manner tend to shovel). If someone had just asked a different question 40 years ago, maybe history today as we know it would be far, far different. Thoughts?
        </p>
        {/* TODO: attach a sign up to my email list here */}
      </div>
    );
  }
} 