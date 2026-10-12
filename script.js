const app = document.getElementById('app');
let currentPage = 'intro';

function setBackground(kind) {
  document.body.classList.remove('bg-cream', 'bg-pink', 'bg-blue', 'bg-stripes');
  if (kind) document.body.classList.add(`bg-${kind}`);
}
function go(page) {
  currentPage = page;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function button(label, action, extra = '') {
  return `<button type="button" ${extra} onclick="${action}">${label}</button>`;
}
function render() {
  const pages = {
    intro: () => {
      setBackground('cream');
      return `
        <div class="sticker" aria-hidden="true">🐻‍❄️🥤🐻</div>
        <h1>ohh it's youuuu</h1>
        <div class="intro-lines">
          <p>Before you ask, yes... this for you. 😌</p>
          <p>No, you're not allowed to judge the effort.</p>
          <p>I could tell you what's next...</p>
          <p>But where's the fun in that?</p>
          <p>- You have one job.</p>
          <p>Click the button.</p>
          <p>And chill! Dont worry, definitely it's not a proposal. 💐</p>
        </div>
        <div class="buttons">${button('Click Me 💗', "go('security')")}</div>`;
    },
    security: () => {
      setBackground('pink');
      return `
        <div class="security-layout">
          <div class="message-copy">
            <p>It may look a little cheesy, but who cares</p>
            <p>A little security check before we continue... 🔒</p>
            <p>Apparently, being the birthday boy isn't enough. 😂</p>
            <p>Don't ever think the password could be your bd date 🧢 I am not that dumb to make it easy for you</p>
            <p>Just something you should definitely remember 🤔</p>
          </div>
          <div class="sticker" aria-hidden="true">🔐</div>
          <form class="form-row" onsubmit="event.preventDefault(); checkPassword();">
            <input id="password" type="password" placeholder="Enter password" autocomplete="off" aria-label="Enter password">
            <div class="buttons">
              <button type="submit">Unlock</button>
              ${button('Hint', "showHint()")}
            </div>
            <p id="password-error" class="error" role="status"></p>
          </form>
          <div id="hint" class="hint">Hint : pixel took a permission of absence for a few hours<br>Somewhere between the notification to real conversation</div>
        </div>`;
    },
    decision: () => {
      setBackground('blue');
      return `
        <div class="sticker" aria-hidden="true">🎉🧸</div>
        <h1>Wowww... looks like you made it here!! 🎉<br>Bravooo 🍬😌</h1>
        <p>But don't celebrate just yet... 😂<br>You still have a long way to go!!! 👀</p>
        <p>So... are you ready to see what's waiting for you?</p>
        <div class="buttons">
          ${button('YES 🙄', "go('birthday')")}
          ${button('NO 🙃', "go('nope')")}
        </div>`;
    },
    nope: () => {
      setBackground('pink');
      return `
        <div class="sticker" aria-hidden="true">🐻‍❄️🐰</div>
        <h1>seriously !!!! chi da chiiii 😡</h1>
        <div class="buttons">${button('Go Back', "go('decision')")}</div>`;
    },
    birthday: () => {
      setBackground('cream');
      return `
        <div class="sticker" aria-hidden="true">🐻🥤🐰</div>
        <h1>Hey old man!! Happy birthday 🎂</h1>
        <div class="buttons">
          ${button('Thanks', "go('thanks')")}
          ${button('Wow!! OMG, I am surprised!! Thankyou so much Nithyaa You are the bestest best of all.', "go('wow')")}
        </div>`;
    },
    thanks: () => {
      setBackground('blue');
      return `
        <div class="sticker" aria-hidden="true">🐻‍❄️💗🐰</div>
        <h1>Chiii da youu, you are such a chii da 😝</h1>
        <div class="buttons">${button('Back', "go('birthday')")}</div>`;
    },
    wow: () => {
      setBackground('pink');
      return `
        <div class="sticker" aria-hidden="true">🐰💅</div>
        <div class="message-copy">
          <p>thats okay, i know i am the bestest person, the cute sweet pretty girl anyone ever seen. chaaa, you did some good deeds in your last birth, no no no no!! I think you have done good deeds all your last births just to get this chance, thats why you got the chance to meet me, get to know me.</p>
          <p>I wonder what that good deeds would be! if you know dont tell to anybody, as u know i am very busy women and i dont like prasing what if they mistook me as goddess! tsk tsk tsk tsk...</p>
          <p>okay, I think i am going too much and you are started getting irritated but those are trueeee, you also know that. lets get back to work now!!</p>
        </div>
        <div class="buttons">${button('Yes, I read the whole thing', "go('quiz')")}</div>`;
    },
    quiz: () => {
      setBackground('blue');
      return `
        <h1>Truely if you have read that, tell me the correct answer to take you to next page or else you will be stuck here only.</h1>
        <div class="quiz-question">Quiz: Nithyaa is the <span class="quiz-blank">__________</span> person I have seen.</div>
        <div class="buttons">
          ${button('Good', "go('wrong')")}
          ${button('The Greatest', "go('correct')")}
        </div>`;
    },
    wrong: () => {
      setBackground('pink');
      return `
        <div class="sticker" aria-hidden="true">🐱🗑️</div>
        <h1>what is this behaviour raa?! Just goood?</h1>
        <div class="buttons">${button('Back', "go('quiz')")}</div>`;
    },
    correct: () => {
      setBackground('cream');
      return `
        <div class="sticker" aria-hidden="true">🐻‍❄️🐰💞</div>
        <div class="message-copy">
          <p>heheh, I know I am the bestest. See you also accepted that!<br>You gave the right answer. 🌝</p>
          <p>okyyy let's continue now...</p>
        </div>
        <div class="buttons">${button('Continue', "go('next')")}</div>`;
    },
    next: () => {
      setBackground('stripes');
      return `
        <div class="gift-side-dolls"><span>👧🏻🌼</span><span>👧🏻🌼</span></div>
        <h1>🎁 Choose Your Gift 🎁</h1>
        <div class="gift-grid">
          <button class="gift-box" onclick="go('gallery')" aria-label="Open first gift"><span>🎁</span><b>Gift 1</b></button>
          <button class="gift-box" onclick="go('video')" aria-label="Open second gift"><span>🎁</span><b>Gift 2</b></button>
          <button class="gift-box" onclick="go('letter')" aria-label="Open third gift"><span>🎁</span><b>Gift 3</b></button>
        </div>
        <p>Pick one… if you dare. 🤭</p>
        <div class="buttons">${button('Back', "go('correct')")}</div>`;
    },
    gallery: () => {
      setBackground('pink');
      return `<h1>Our Little Memory Lane 📸❤️</h1>
        <p>12 memories, 12 stories, and a lot of nonsense. 😂</p>
        <p class="small">A little collection of our memories, one photo and one story at a time. ❤️</p>
        <div id="memory-gallery" class="memory-gallery"></div>
        <div class="buttons">${button('← Back to gifts', "go('next')")}</div>`;
    },
    video: () => {
      setBackground('blue');
      return `<div class="sticker">🎬💗🎀</div><h1>A Little Video Surprise</h1>
        <p>Something special, just for you. ❤️</p>
        <div class="video-card"><video id="gift-video" controls playsinline poster="assets/gift-video-poster.jpg" preload="metadata">
          <source src="assets/gift-video.mp4" type="video/mp4">
          Your browser does not support video playback.
        </video></div>
        <div class="buttons">${button('← Back to gifts', "go('next')")}</div>`;
    },
    letter: () => {
      setBackground('cream');
      return `<article class="birthday-letter">
        <header><div class="letter-flourish">✿ ♡ ✿</div><h1>For You, on Your Birthday</h1><div>𓂃 ࣪˖ ִֶָ𐀔</div></header>
        <div id="birthday-letter-content" class="letter-content"></div>
        <div class="letter-note">note: making fun of me for this long long paragraphs is prohibited. 😂</div>
        </article>
        <div class="buttons">${button('← Back to gifts', "go('next')")}</div>`;
    }
  };
  app.innerHTML = (pages[currentPage] || pages.intro)();
  if (currentPage === 'gallery') buildMemoryGallery();
  if (currentPage === 'letter') document.getElementById('birthday-letter-content').textContent = letter;
}
const captions = [
`Funny how the first time we met in person didn’t feel like a first meeting at all. After knowing each other through Teams, seeing face-to-face felt less like meeting a friend for the first time and more like continuing a conversation that had simply been waiting for us to show up in the same room. No awkward introductions, no stranger energy—just the usual us, except this time, we were finally offline. 😂`,
`Remember this picture? Our second meeting, in Bangalore, on the 25th of April. You took me out for dinner, and there I was, clueless about what to order and a little too shy to admit it, so I settled for French fries, as if that was a perfectly reasonable dinner choice. 😂 You probably still wonder why I even decided to come that day! I could see how exhausted you were and how badly you wanted to sleep, u might have scolded me in my mind yet you still came to drop me off. And somehow, we ended up taking the longest walk ever, without either of us having the slightest clue where we were going. 😂Looking back, it was such a simple little moment, but one that stayed with me. And honestly, I'm damn sure you wouldn't go on a directionless, sleep-deprived walk like that for me now. 😂`,
`Ahhhhh, this one! 😂 The legendary treasure hunt we went on to find you a rental home. I don't know how you remember those days, but I absolutely loved them. There was something so fun about walking around, spotting every “To-Let” board, and exploring each house, even if only for a little while. And for a moment, we'd imagine what it would be like if you actually lived there. Of course, I also had to endure your endless, very important discussions about where you'd put your TV, fridge, projector, and God knows what else. Bla bla blaaa. 😂 As if we were designing your dream mansion instead of hunting for a rental! But honestly, those days were so much fun. Even better, I got paid a commission for my services—in flowers! 🌸😂 Not bad for someone who was basically your unpaid real estate consultant, personal companion, and fellow dream-house inspector. Looking back, it was never really about finding you a house. It was about all the little moments inbetween. ❤️`,
`This is my second-most-favourite picture, mainly because I look exceptionally pretty in it. Not that I’m not pretty otherwise, of course, but let’s just say this picture does a particularly good job of proving it. 😂🤌🏻 That day was such a good one! From our photobooth photoshoot, where you insisted on showing off your absolutely ridiculous poses, to go-karting, where I came first despite being a complete beginner (natural talent, what can I say? 😌🏎‍🟀). And of course, the absolutely brilliant pictures I took of you while you were busy shooting. Someone had to document your talents, after all. 😂 It was one of those days filled with random activities, endless teasing, and we should never forget that auto ride..........some little moments that made the whole day worth remembering. Nothing extraordinary, perhaps, but somehow, a day so well spent that it became a memory worth keeping. ❤️`,
`I honestly don't remember much of what we did the whole day before heading to that temple. But one thing I can say with absolute certainty is that you probably spent most of it sleeping, and I had to wake you up barely 20 minutes before we were supposed to leave. 😂 Some things never change, I guess! But hey, despite the last-minute rush and your questionable sleeping habits, you did came on time.`,
`Ahhhh, this one! 😂 I remember this so well. We had somewhere to go, and there I was, all dressed up and ready, while you, the certified sleepyhead, announced that you needed a quick 30-minute nap and instructed me to wake you up afterward. And, of course, the moment your head touched the pillow, you were gone. Completely disappeared into your little world of dreams. 😂 Now, I could have woken you up right on time, as instructed, but how could I possibly disturb a poor, sleeping soul? So, being the exceptionally kind and considerate person that I am, I generously let you sleep for a whole hour instead. You're welcome, by the way. 😂 Honestly, you're lucky to have me. Not everyone comes with the patience of a saint and the kindness of an angel. Though, unfortunately, neither comes with the power to fix your sleeping habits. 🤦🏻‍♀️😂`,
`Ahhhh, here we have someone trying very hard to prove to me that he knows how to cook. And whats better way to demonstrate his culinary expertise than by making Maggi for the very first time in his kettle at his new home? 😂👨🏻‍🍳 Honestly, I probably shouldn't tease you about this one because, surprisingly, it was actually too good! 😂 Maybe there's a hidden chef in you after all. Or maybe Maggi is just so forgiving that even you couldn't go wrong with it. 🤭But hey, chef, I shall give credit where it's due. That day, you did prove your point😂❤️`,
`And then came THE DAY THE TRUTH WAS REVEALED! 😱⚡Hritesh finally discovered the truth about Pritesh. DUN DUN DUNNNN! 🌩️🌩️(Imagine dramatic lightning striking in the background, thunder roaring, the camera zooming in on Hritesh’s shocked face, and the iconic Hindi serial music playing while the scene replays from five different angles. 😂🎭) The revelation. The shock. The betrayal. The dramaaaa! Rishta wahi, soch nayi… but Pritesh ka sach sabke saamne aa gaya! 🤣⚡`,
`Ahhh, this day! 😂 I think I exhausted you beyond your limits by dragging you around everywhere I wanted to go, without once checking if you were still keeping up or silently regretting your life choices. But then again, you became friends with me voluntarily, so I'd say this is just one of the consequences you signed up for. No complaints allowed! 😂But jokes apart, we really did have a long, tiring day, and somehow, the pictures turned out so good! some pretty good pictures to prove that you survived another day with me. 🤭❤️`,
`Finally, we made it to Nandi Hills in a car, just as you wanted, instead of on a bike! 😂 And look at you, happily enjoying the very plan I made. So, I think we can all agree on the moral of this story: I'm actually pretty good at planning outings, and you secretly enjoy them far more than you admit🤦🏻‍♀️😂 I showed you fog, cloud and pretty good photos to post. Oh, and let's not forget that you definitely had your own share of fun that day.`,
`Eda, you have never taken one proper picture of me, and this right here is solid proof of your photography skills. 😭😂 Chiii, what is this behaviour, da, Hritesh Shawww?! At this point, I genuinely wonder if you take bad pictures on purpose or if it's just your hidden talent. 😂📸 And look at that cunning little smile on your face while taking this picture of me! 😭 You knew exactly what you were doing, didn't you? That innocent face is just a cover-up for your crimes against my photogenic self.`,
`The cutest picture I have of you, and I genuinely mean it! 🥹❤️ I’m not even teasing you this time; it’s just so adorably cute that I couldn’t resist adding it here.After all, you are cute, and I suppose I can admit that once in a while. So, consider this a special birthday privilege, a little gift from me to you. 🎁😂 But don't get any ideas, mister! This is a once-in-a-lifetime offer. Don't you dare expect me to say something this sweet about you ever again. Enjoy it while it lasts! 🤭😂❤️`
];
const letter = `Okay… now comes the part where I get a little cheesy. 😌😂

Happy Birthday, you! 🥳🎂

Another year older!!!! But don't worry, I will be kind and not mention the number 😉 but you become too old.

As for birthday gifts, I will look for some oilment for ur knee pain ungleeeee🤗

It’s funny to think how a person who was once just a name on a screen somehow became someone I got to meet, laugh with, annoy, and create some really nice chaos with. 😂

I don’t know exactly when our random respectful conversations turned into a bullying I genuinely enjoy, but I’m really glad they did sometimes and sometimes not, when I am the one getting bullied. 🤍

I may not say it all the time but i am genuinely glad I got to know you. You have become one of those people whose presence just makes certain days a little better.

Thinking back we had a lot more life therapy sessions which i used to listen blindly, Thanks for being the listener to my unpopular radio broadcast.

On your birthday, I just hope life gives you plenty of reasons to smile, people who genuinely care about you, the courage to go after everything you want and memories that you'll look back on and think, “Yeah… that was a good time.” ✨

And of course I hope you are slightly less annoying, occasionally less ridiculous. Anyways that version, now I've gotten used to it.

Happy Birthday once again! 🥂🎉 Here’s to another year, have more adventures, meet new people and have stupid conversations, more laughs, and hopefully… a lot more memories. 🤍

I know this might be a little cringe for you, but I was happy doing it, so no judgements. 😂❤️ I don't know if this made you smile even a little, whether you actually liked it, or whether you even opened it as soon as I sent it. But, honestly, I really hope you read this before opening anyone else's messages. Let me have that little privilege, at least. 🤭I think I can be a little selfish here. 

When I look at 2026, I feel like I'll always remember this year. So many things happened that I never imagined would happen, not even in my wildest thoughts. Like you always say, we never really know anything; nothing is predictable, and anything can happen. And maybe that's what makes some years, some people, and some memories so special.
More than anything, I genuinely hope you get everything you've ever wished for. I hope life gives you plenty of reasons to be happy, that you get to do all the things you've dreamed of doing, and that you never have to look back and regret not trying something you really wanted.
And since you're getting older by the day, it's probably time you started taking your life seriously. Do things that make you happy, find yourself a girl, and settle down into family life soon. 😂 Don't you dare tell me you're planning to get married in your thirties! Who's going to marry you by then, da? You'll be an expired product by that point. No returns, no replacements! 🤣 So hurry up, live your life, fulfil your dreams, and eventually become the responsible family man you're supposed to be. I genuinely want to see that version of you someday.
But, jokes apart, there's something I've actually wondered about.
I don't know where life will take us next year. Maybe I won't be around you as much, or maybe we won't get to spend time together the way we do now. After 2,3 years, we may lose contact also with each other, but thats okay.....Life will go on anyways,we have our own life to take care of!!
Hritesh, do you think you'll remember me even 20 or 30 years from now?
I wonder what would happen if we happened to cross paths after 30 years. What if you walked right past me without recognising me? I'd probably recognise you immediately, but don't expect me to come running towards you first. Absolutely not! I'll stand there, act like a complete stranger, and wait for you to figure out who I am. 😂
And I'm giving you exactly two minutes, mister. Two whole minutes to remember me and say something. If you still don't recognise me after that, I'll kick you, call you the most useless friend ever, and run away. BYEEEEEE! 🤣🤣
But somewhere beneath all that drama, I really hope that even after 20 or 30 years, when life has changed us in a hundred different ways, you'll still remember me. Maybe not every conversation, every silly argument, or every little thing we did, but at least the fact that once upon a time, there was this girl who became your friend, dragged you everywhere, made fun of you relentlessly, annoyed you with her endless messages, and somehow made a whole collection of memories with you.
And I hope that, whenever you remember those days, you smile a little.
Because I know I will. ❤️`;

function buildMemoryGallery() {
 const grid = document.getElementById('memory-gallery');
 if (!grid || grid.dataset.built) return;
 grid.dataset.built = 'yes';
 captions.forEach((caption, i) => {
   const card = document.createElement('article'); card.className = 'memory-card';
   const photo = document.createElement('div'); photo.className = 'memory-photo';
   const img = document.createElement('img');
   img.src = `assets/memories/photo-${String(i+1).padStart(2,'0')}.jpg`;
   img.alt = `Memory photo ${i+1}`;
   img.loading = 'lazy';
   img.onerror = () => { photo.classList.add('missing-photo'); photo.textContent = `Add your image file: assets/memories/photo-${String(i+1).padStart(2,'0')}.jpg`; };
   photo.appendChild(img);
   const body = document.createElement('div'); body.className = 'memory-caption';
   const title = document.createElement('h3'); title.textContent = `${i+1}${['st','nd','rd'][i] || 'th'} photo`;
   const text = document.createElement('p'); text.textContent = caption;
   body.append(title,text); card.append(photo,body); grid.appendChild(card);
 });
}

function checkPassword() {
  const value = document.getElementById('password').value;
  const error = document.getElementById('password-error');
  if (value === '190825') {
    go('decision');
  } else {
    error.textContent = 'Wrong password! Try again, birthday boy 😌';
    document.getElementById('password').focus();
  }
}
function showHint() {
  const hint = document.getElementById('hint');
  hint.classList.toggle('visible');
}
render();
