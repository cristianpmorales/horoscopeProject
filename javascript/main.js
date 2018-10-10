//build horoscope app
// user can enter date of irth month and day
//return a horoscope based

// click event listner for search
document.getElementsByTagName('button')[0].onclick = lookupHoro

//Message for pisces
pisces = "The word no could be your best line of defense today, Pisces. Stop letting people take advantage of you with their crazy demands. No more playing diplomat. It’s time to stand up for yourself! A tricky square between the emo moon in your community corner and soothsayer Chiron in your money sector, could push you to re-evaluate a shared investment. Is everyone in the group pulling their weight? Or are you stuck footing most of the bill? If things feel unequal, start an open dialogue with the group. If you calmly explain your position, things should be resolved easily!"
//Message for Ares
aries="Watch your step, Ram! Even though the moon is in ambitious Capricorn and your career corner, it’s being nuked by Chiron, the “wounded healer” comet that’s been stationed in your sign since April 17. You’re more driven than ever, Aries, but is this the right time to climb the ladder? If you’re pushing others off their rungs, the answer is no. You don’t want to make enemies on your way to the top. Make sure you listen to everyone on your team before plowing forward. If you have the support of your colleagues, your rise will be even more glorious!"
//message for taurus
taurus ="You’re an expert boundary-builder, Bull, but a harsh cosmic conflict could leave you questioning your judgment today. A complicated angle between the moon and oracular Chiron (the “wounded healer” comet) in your unconscious twelfth house may unearth long-buried issues that leave you emotionally exposed. Your defenses are down, so steer clear of people that might mistake your kindness for weakness. Only listen to those who lift you up! You need to surround yourself with positivity, so lean on your loyal squad for support."
gemini="Get ready—a friend may hit you with a shocker today as the moon and Chiron go head to head. Although this information can be unsettling, you’ll also realize that this person needs someone to lean on. But are you the best candidate to play amateur therapist or legal counsel? If you can offer your support, that’s great. But make sure you’re not getting into something that’s over your pay-grade. If it looks like this situation will also destabilize your own emotional equilibrium, keep your distance. You can simply offer kind words of support without sacrificing your sanity."
cancer="At an emotional crossroads, Cancer? Today, the moon locks into a tangled angle with “wounded healer” comet Chiron, leaving you feeling conflicted about a certain relationship. Are you trying to keep a partnership alive even though it’s passed its expiration date? You both may care about each other deeply but if your values don’t align, it can be difficult to sustain that connection. If it’s simply not a match, don’t force it. Sometimes love means knowing when to let go. If things are meant to be, you’ll cross paths again. Let life unfold naturally, and trust that the universe will lead you in the right direction."
leo="Is it time for a break? You may feel indecisive about everything today as the moon in your ambitious sixth house locks horns with soothsayer Chiron in your adventure corner. On the one hand, you’d love to put in a few extra hours of work and finish a major project. But another part of you is feeling the impulse to let loose and play hooky. After all, there’s nothing like a little self-care to refuel your professional tanks. Do something for YOU, Leo, whether you’re stepping out for a nail-art appointment mid-day or planning an epic week in Tulum…or both!"
virgo="Getting mixed signals, Virgo? Today, a perplexing rumble between the sensitive moon and healer-feeler comet Chiron could leave you confused about where you stand in a partnership. Is this person being cool and distant…or are you just imagining it? Don’t make any impulsive decisions about the future. Take a step back and get perspective on the situation. Under these emotionally charged skies, there’s a chance you could be making a mountain out of a molehill. If you just leave things alone, this conflict may work itself out by the weekend."
libra="Celestial style tip: Avoid wearing your heart on your sleeve today, Libra. Actually, you should try to be a bit more buttoned-up about everything! With the moon in your emotional fourth house throwing shade at “wounded healer” comet Chiron in your relationship realm, someone in your circle could make a mountain out of a molehill—AND try to drag you into it! In this case, your best defense is indeed a good offense, so keep your feelings (and your secrets) to yourself. And should someone try to provoke you, flash that sweet Libra smile and say…nothing."
scorpio="Getting your relationship wires crossed, Scorpio? Chances are, you’ll be a little confused today. With a cosmic brawl brewing between unpredictable Chiron and the Capricorn moon in your communication corner, mixed messages are flying! Your normal methods of sleuthing won’t help you get to the bottom of what’s what right now. Best to simply avoid any intense discussions, and tonight, cozy up with a bowl of ice cream and a good movie instead of further engaging. This will all get sorted tomorrow!"
sagittarius="Today, as the moon settles in common-sense Capricorn and your second house of finances, you may be inspired to make a few ambitious money moves. But proceed carefully! La luna also squares the “wounded healer” comet, Chiron today, which means discussions around finances could quickly go off the rails. If you’re in a relationship, don’t let your cash flow disrupt your romantic flow. Maxing out the shared credit card without consulting your S.O., for example, could have deleterious effects. If you’re single, let this cosmic red flag apply to your dating life. The way people treat their money will invariably affect you, should you wind up in a relationship. Make sure you’re not getting wrapped up in someone else’s debt or irresponsible ways."
capricorn="Need a nap, Cap? Under today’s square between the moon and and sacrificial Chiron (the “wounded healer” comet), you might have trouble balancing your needs with those of your loved ones. Protecting your precious “me time” can be tough, especially when you want to support your nearest and dearest. Today will be extra-confusing on this front. Take a step back, and evaluate each situation objectively. Are you offering support because you want to, or because you’re afraid they’ll be mad at you if you don’t? People may try to coerce you but stand your ground and just say no to draining activities—and energy vampires in allies’ clothing."
aquarius="How unlike you, Aquarius, to give other people control over your destiny. Today you may realize that you’ve handed over a little too much power to a strong-willed person. As the “wounded healer” asteroid, Chiron, goes head to head with the sensitive moon in your self-reflection zone, shield your field against steamrolling personality types. Also, be careful not to cave to the pressure from loved ones, especially if they’re upsetting your own spiritual balance. No need to get into any blow-ups; just take the space you need. By focusing on self-care, you’ll charge your emotional batteries, and be in a better position to choose the best course of action for YOUR life."
// Function to save the month and the date
function lookupHoro(){
  // saving the value enter by the user to become an input
  var month = document.getElementsByTagName('input')[0].value
  // saving the value enter by the user to become an input
  var day = document.getElementsByTagName('input')[1].value
  //display on the console what java read
  console.log(month)
  console.log(day)
  //condtion for pisces
  if ( ( (results = /(\bFebruary)|(\bfebruary)/.test(month) && day >= 20) && (results = /(\bFebruary)|(\bfebruary)/.test(month) && day <= 29) ) ||
      ( ( (results = /(\bMarch)|(\bmarch)/.test(month) && day >= 1) && (results = /(\bMarch)|(\bmarch)/.test(month) && day <= 20) ) ) ) {
    console.log("you a fish fish")
    document.getElementsByTagName('h3')[0].innerHTML = "Pisces"
    document.getElementsByTagName('p')[0].innerHTML = pisces
    //condition for Aries
  } else if (( (results = /(\bMarch)|(\bmarch)/.test(month) && day >= 21) && (results = /(\bMarch)|(\bmarch)/.test(month) && day <= 31)) ||
            ( (results = /(\bApril)|(\bapril)/.test(month) && day >= 1) && (results = /(\bApril)|(\bapril)/.test(month) && day <= 20))){
      console.log("you a ram ram")
      document.getElementsByTagName('h3')[0].innerHTML = "Aries"
      document.getElementsByTagName('p')[0].innerHTML = aries
  } else if ( ( (results = /(\bApril)|(\bapril)/.test(month) && day >= 21) && (results = /(\bApril)|(\bapril)/.test(month) && day <= 30)) ||
            ( (results = /(\bMay)|(\bmay)/.test(month) && day >= 1) && (results = /(\bMay)|(\bmay)/.test(month) && day <= 21))){
    console.log("you a ox ox")
    document.getElementsByTagName('h3')[0].innerHTML = "Taurus"
    document.getElementsByTagName('p')[0].innerHTML = taurus
  }else if ( ( (results = /(\bMay)|(\bmay)/.test(month) && day >= 21) && (results = /(\bMay)|(\bmay)/.test(month) && day <= 31)) ||
            ( (results = /(\bJune)|(\bjune)/.test(month) && day >= 1) && (results = /(\bJune)|(\bjune)/.test(month) && day <= 21))){
    console.log("you a twin twin")
    document.getElementsByTagName('h3')[0].innerHTML = "Gemini"
    document.getElementsByTagName('p')[0].innerHTML = gemini
  }else if ( ( (results = /(\bJune)|(\bjune)/.test(month) && day >= 22) && (results = /(\bJune)|(\bjune)/.test(month) && day <= 30)) ||
            ((results = /(\bJuly)|(\bjuly)/.test(month) && day >= 1) && (results = /(\bJuly)|(\bjuly)/.test(month) && day <= 22))){
    console.log("you a can cer")
    document.getElementsByTagName('h3')[0].innerHTML = "Cancer"
    document.getElementsByTagName('p')[0].innerHTML = cancer
  }else if ( ( (results = /(\bJuly)|(\bjuly)/.test(month) && day >= 23) && (results = /(\bJuly)|(\bjuly)/.test(month) && day <= 31)) ||
            ((results = /(\bAugust)|(\baugust)/.test(month) && day >= 1) && (results = /(\bAugust)|(\baugust)/.test(month) && day <= 21))){
    console.log("you a lion lion")
    document.getElementsByTagName('h3')[0].innerHTML = "Leo"
    document.getElementsByTagName('p')[0].innerHTML = leo
  }else if ( ( (results = /(\bAugust)|(\baugust)/.test(month) && day >= 22) && (results = /(\bAugust)|(\baugust)/.test(month) && day <= 31)) ||
            ((results = /(\bSeptember)|(\bseptember)/.test(month) && day >= 1) && (results = /(\bSeptember)|(\bseptember)/.test(month) && day <= 23))){
    console.log("you a vir go")
    document.getElementsByTagName('h3')[0].innerHTML = "Virgo"
    document.getElementsByTagName('p')[0].innerHTML = virgo
  }else if ( ( (results = /(\bSeptember)|(\bseptember)/.test(month) && day >= 24) && (results = /(\bSeptember)|(\bseptember)/.test(month) && day <= 30)) ||
            ( (results = /(\bOctober)|(\boctober)/.test(month) && day >= 1) && (results = /(\bOctober)|(\boctober)/.test(month) && day <= 23))){
    console.log("you a libra")
    document.getElementsByTagName('h3')[0].innerHTML = "Libra"
    document.getElementsByTagName('p')[0].innerHTML = libra
  }else if ( ( (results = /(\bOctober)|(\boctober)/.test(month) && day >= 24) && (results = /(\bOctober)|(\boctober)/.test(month) && day <= 30)) ||
            ( (results = /(\bNovember)|(\bnovember)/.test(month) && day >= 1) && (results = /(\bNovember)|(\bnovember)/.test(month) && day <= 22))){
    console.log("you a scor pio")
    document.getElementsByTagName('h3')[0].innerHTML = "Scorpio"
    document.getElementsByTagName('p')[0].innerHTML = scorpio
  }else if ( ( (results = /(\bNovember)|(\bnovember)/.test(month) && day >= 23) && (results = /(\bNovember)|(\bnovember)/.test(month) && day <= 30)) ||
            ( (results = /(\bDecember)|(\bdecember)/.test(month) && day >= 1) && (results = /(\bDecember)|(\bdecember)/ && day <= 22))){
    console.log("you a Sagit tarius")
    document.getElementsByTagName('h3')[0].innerHTML = "Sagittarius"
    document.getElementsByTagName('p')[0].innerHTML = sagittarius
  }else if ( ( (results = /(\bDecember)|(\bdecember)/ && day >= 23) && (results = /(\bDecember)|(\bdecember)/ && day <= 31)) ||
            ( (results = /(\bJanuary)|(\bjanuary)/ && day >= 1) && (results = /(\bJanuary)|(\bjanuary)/ && day <= 20))){
    console.log("you a capricorn")
    document.getElementsByTagName('h3')[0].innerHTML = "Capricorn"
    document.getElementsByTagName('p')[0].innerHTML = capricorn
  }else if ( ( (results = /(\bJanuary)|(\bjanuary)/ && day >= 21) && (results = /(\bJanuary)|(\bjanuary)/ && day <= 31) )  ||
   ((results = /(\bFebruary)|(\bfebruary)/.test(month) && day >= 1) && ( (results = /(\bFebruary)|(\bfebruary)/.test(month) && day <= 19) )) ) {
    console.log("you a libra libra")
    document.getElementsByTagName('h3')[0].innerHTML = "Aquarius"
    document.getElementsByTagName('p')[0].innerHTML = aquarius
  }else
  document.getElementsByTagName('h3')[0].innerHTML = "please enter a date"

  }
