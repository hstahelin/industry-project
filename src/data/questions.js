import novel from "../assets/images/novel.jpg"
import camera from "../assets/images/camera.jpg"
import puzzle from "../assets/images/puzzle.jpg"
import cookbook from "../assets/images/cookbook.jpg"
import sports from "../assets/images/sports.jpg"
import crafting from "../assets/images/crafting.jpg"
import watching from "../assets/images/watching.jpg"
import organizing from "../assets/images/organising.jpg"
import baking from "../assets/images/baking.jpg"
import podcast from "../assets/images/podcast.jpg"
import spices from "../assets/images/spices.jpg"
import knife from "../assets/images/knife.jpg"
import basketball from "../assets/images/basketball.jpg"
import playlist from "../assets/images/playlist.jpg"
import survival from "../assets/images/survival.jpg"
import detective from "../assets/images/detective.jpg.webp"
import director from "../assets/images/director.png"
import inventor from "../assets/images/inventor.jpg"
import chef from "../assets/images/chef.jpg"
import athlete from "../assets/images/athlete.jpg.webp"
import gym from "../assets/images/gym.jpg"
import gadget from "../assets/images/gadget.jpg"
import basket from "../assets/images/basket.jpg"
import boardgame from "../assets/images/boardgame.jpg"
import audiobook from "../assets/images/audiobook.jpg"
const questions = [
  {
    question: "If you found a mysterious ticket to an unknown destination, what would you pack first?",
    options: [
      { text: "A novel", image: novel },
      { text: "A camera", image: camera },
      { text: "A puzzle book", image: puzzle },
      { text: "A cookbook", image: cookbook },
      { text: "Sports gear", image: sports }
    ],
    categories: ["Audio", "Wirecutter", "Games", "Cooking", "The Athletic"],
  },
  {
    question: "It's a rainy Saturday with no plans. What’s your perfect indoor activity?",
    options: [
      { text: "Listening to a thrilling podcast series", image: podcast },
      { text: "Organizing your space", image: organizing },
      { text: "Cooking/baking your favorite dish", image: baking },
      { text: "Crafting something", image: crafting },
      { text: "Watching a sports marathon", image: watching }
    ],
    categories: ["Audio", "Wirecutter", "Cooking", "Games", "The Athletic"],
  },
  {
    question: "You're stranded on a desert island. Which item do you hope to have with you?",
    options: [
      { text: "Your favorite music playlist", image: playlist },
      { text: "A Swiss Army knife", image: knife },
      { text: "A box of assorted spices", image: spices },
      { text: "A survival manual", image: survival },
      { text: "A basketball", image: basketball }
    ],
    categories: ["Audio", "Wirecutter", "Cooking", "Games", "The Athletic"],
  },
  {
    question: "You can invite one person to dinner, living or dead. Who would it be?",
    options: [
      { text: "A famous filmmaker", image: director},
      { text: "A celebrated inventor", image: inventor },
      { text: "A renowned chef", image: chef },
      { text: "A legendary detective", image: detective },
      { text: "An Olympic athlete", image: athlete }
    ],
    categories: ["Audio", "Wirecutter", "Cooking", "Games", "The Athletic"],
  },
  {
    question: "You need to pick a gift for a friend. What do you choose?",
    options: [
      { text: "A bestselling audiobook", image: audiobook },
      { text: "The latest tech gadget", image: gadget },
      { text: "A gourmet food basket", image: basket },
      { text: "A board game", image: boardgame },
      { text: "A premium gym membership", image: gym }
    ],
    categories: ["Audio", "Wirecutter", "Cooking", "Games", "The Athletic"],
  },
];

export default questions;