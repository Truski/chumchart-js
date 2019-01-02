import { Injectable } from '@angular/core';
import { Question } from './quiz/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(): Question[] {
    const questions = [
      {
        text: 'You see a bus headed for a homeless man, how do you react?',
        answers: [
          {
            text: 'You risk your own safety by jumping in the street to pull the man out of the way.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You wave down the bus driver urging him to stop.',
            moral: 0,
            ethic: 1
          },
          {
            text: 'You turn away and walk the other direction.',
            moral: 0,
            ethic: 2
          },
          {
            text: 'You stay and witness the tragedy.',
            moral: 0,
            ethic: 3
          }
        ]
      },
      {
        text: 'Walking down the street, the man in front of you drops his wallet what do you do?',
        answers: [
          {
            text: 'You catch up to him and return his wallet.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You call for his attention.',
            moral: 0,
            ethic: 1
          },
          {
            text: 'You pick up the wallet and examine the content.',
            moral: 0,
            ethic: 2
          },
          {
            text: 'You take the wallet and walk the opposite direction.',
            moral: 0,
            ethic: 3
          }
        ]
      },
      {
        text: 'You walk in on your 15 year old son doing heroin in the bathroom.  How do you react?',
        answers: [
          {
            text: 'You miss out on opportunities in order to finance and take him to rehabilitation.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You punish him for not telling you about it.',
            moral: 0,
            ethic: 1
          },
          {
            text: 'You simply let him continue.',
            moral: 0,
            ethic: 2
          },
          {
            text: 'You disown him for making such a life ruining decision.',
            moral: 0,
            ethic: 3
          }
        ]
      },
      {
        text: 'You are in Elliot Hall taking a Calculus final and notice a student sitting near you is copying your answers.. Do you',
        answers: [
          {
            text: 'Raise your hand and report the incident to a proctor.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'Decide to bring up the incident to your TA in your next class',
            moral: 0,
            ethic: 1
          },
          {
            text: 'Ignore it and focus on your own exam.',
            moral: 0,
            ethic: 2
          },
          {
            text: 'Purposefully circle the wrong answers on the exam.',
            moral: 0,
            ethic: 3
          }
        ]
      },
      {
        text: 'You are studying in the library and notice someone is going around using people’s unattended, unlocked laptops. Do you...',
        answers: [
          {
            text: 'Report the individual to a staff member',
            moral: 0,
            ethic: 0
          },
          {
            text: 'Inform the laptop’s owner',
            moral: 0,
            ethic: 1
          },
          {
            text: 'Do nothing and assume the individual knows the laptop’s owner',
            moral: 0,
            ethic: 2
          },
          {
            text: 'Also take advantage of the unlocked laptops',
            moral: 0,
            ethic: 3
          }
        ]
      },
      {
        text: 'Your 9 year old daughter approaches you and asks where Daddy is.  Your husband left you a few days ago.  Do you tell her',
        answers: [
          {
            text: 'the truth, that she no longer has married parents.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'that you and Dad are taking a break.',
            moral: 1,
            ethic: 0
          },
          {
            text: 'that you aren’t sure where he’s been.',
            moral: 2,
            ethic: 0
          },
          {
            text: 'he has just been on a business trip for a few days.',
            moral: 3,
            ethic: 0
          }
        ]
      },
      {
        text: 'You wake up hungover on a couch you’ve never felt before, in a house you’ve never been in before, \
        and with a woman you’ve never met before.  You are extremely upset about the situation. \
        You’ll never let it happen again.  What do you tell your wife?',
        answers: [
          {
            text: 'You admit the full truth about what happened.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You tell her how bad you feel, sparing the details.',
            moral: 1,
            ethic: 0
          },
          {
            text: 'You tell her it was a mistake and to just move on.',
            moral: 2,
            ethic: 0
          },
          {
            text: 'You never say a word, because it could only hurt you.',
            moral: 3,
            ethic: 0
          }
        ]
      },
      {
        text: 'Your fourteen year old neighbor asks you to purchase alcohol for him. How do you respond?',
        answers: [
          {
            text: 'You reject his request and inform his parents regarding the matter.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You walk away and pretend as if you didn’t hear anything.',
            moral: 1,
            ethic: 0
          },
          {
            text: 'You take his money and buy the alcohol for yourself.',
            moral: 2,
            ethic: 0
          },
          {
            text: 'You agree to purchase the alcohol as long as he does not inform his parents.',
            moral: 3,
            ethic: 0
          }
        ]
      },
      {
        text: 'You find a squirrel in your backyard.  What do you do with it?',
        answers: [
          {
            text: 'You watch it from a distance and gaze at its movements.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You creep towards it to try and get a real close look.',
            moral: 1,
            ethic: 0
          },
          {
            text: 'You take a stick and try and poke it.',
            moral: 2,
            ethic: 0
          },
          {
            text: 'You run after it, insistent on catching the critter.',
            moral: 3,
            ethic: 0
          }
        ]
      },
      {
        text: 'You find yourself in an estate sale after an old woman died in the house just a few days earlier. \
        How do you behave around the house?',
        answers: [
          {
            text: 'With utmost respect, you watch every step as to not disturb the home.',
            moral: 0,
            ethic: 0
          },
          {
            text: 'You act polite to those around you.',
            moral: 1,
            ethic: 0
          },
          {
            text: 'You walk around the home as you would any other retail store.',
            moral: 2,
            ethic: 0
          },
          {
            text: 'You dash around without much care, the house is foreclosed after all.',
            moral: 3,
            ethic: 0
          }
        ]
      }
    ];
    return questions;
  }
}
