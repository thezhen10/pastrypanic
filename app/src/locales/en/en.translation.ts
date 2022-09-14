import { namespaces } from '../../i18n/i18n.constants'

export const en = {
  [namespaces.common]: {
    buttons: {
      ok: 'Ok',
      cancel: 'Cancel',
    },
    construction: 'Under construction!',
  },
  [namespaces.pages.about]: {
    para0:
      'An arcade style alt.ctrl game with a haptic and physical twist! Also comes with a lazy cat. Try to make as much pastry as possible with a controller that challenges your ability to manage multiple input sliders, each with different haptic feedback.',
    para1:
      'Pastry Panic (with cat) is an arcade style game with a physical mechanics through swapping inputs with distinct haptic feedback.',
    para2:
      'In this single player game, players must swap input sliders that represent baking tools in a pastry factory to complete as many pastries as possible in a time limit. There are 2 input slots, corresponding to the left and right conveyor belts that pastries descend from, and 5 baking actions in the game.',
    para3:
      'Each action is executed through a slider with a distinct haptic and motion; cutting with a single press, kneading by repeatedly mashing, holding the slider down to fill, sprinkling by shaking a slider that can get stuck if pushed down too far, and a knob that locks into place for baking (just remember to remove it).',
    para4:
      'Incomplete pastries will appear along the belts, and each type of pastry requires a different sequence of actions to complete. The specific recipes for the pastries are contained in a physical recipe book that players must browse.',
    para5:
      'Between juggling sliders, executing inputs, reading recipes, and handling two pastries simultaneously, Pastry Panic presents a frantic experience where players must consider both the screen and the physical space around them for gameplay.',
    altctrl: 'alt.ctrl.GDC 2022 Audience Award Winner',
    techniques: 'Made with techniques developed in ',
    contact: 'Contact - pastrypanicwithcat@gmail.com',
    footer:
      'Designed and developed by Yong Zhen Zhou, with support from Clement Zheng and the Keio-NUS CUTE Center',
  },
  [namespaces.pages.team]: {
    main1head: 'Designed and developed by',
    main1body: 'Yong Zhen Zhou',
    main2head: 'Advised and supported by',
    main2body: 'Clement Zheng & the Keio-NUS CUTE Center',
    boothhead: 'On-site and Booth Production Support',
    boothbody: 'Yong Kai Yi\n Daniel Lok\nAaron Pang\nLam Minghan',
    webhead: 'Website',
    webbody: 'Yong Kai Yi\nDaniel Lok',
    jphead: 'Japanese Localisation',
    jpbody: 'Lam Minghan',
    recipehead: 'Recipe Book Graphics and Layout',
    recipebody: 'Feng Guozi',
    photohead: 'Photography and Filming',
    photobody: 'Vivien Tan\nMok Zijie',
    specialhead: 'Special Thanks To',
    specialbody: 'Tatiana Vilela dos Santos\nNathaniel Ng\nCat\nMum',
  },
  [namespaces.pages.howto]: {
    para0:
      'Make as much pastry as possible before time runs out! 2 pastries will appear at a time. Complete pastries to earn points and aim for a high score.',
    para1:
      'There are 2 slots on the controller for the left and right conveyor belts.',
    para2:
      'Move the sliders between the slots to do actions to make the pastries',
    inputs: 'INPUTS:',
    para3:
      'There are 5 input sliders for 5 different actions - cut, knead, fill, sprinkle, and bake.',
    cut: 'CUT - Press once to cut',
    knead: 'KNEAD - Press repeatedly to knead',
    fill: 'FILL - Press and hold down to fill. Release before it overfills though!',
    sprinkle:
      'SPRINKLE – Move the shaker up and down to sprinkle, if you press too far it will break!',
    bake: 'BAKE – Press the oven and it will lock into place. Remember to take it out!',
    recipes: 'RECIPES:',
    para4:
      'Each pastry requires a different sequence of actions. You can read the recipe book to find out!',
  },
  [namespaces.pages.controller]: {
	para0: 'A breakdown of the controller mechanisms.  The entire controller is fabricated using a laser-cutter, with a 3d-printer for the handles.',
	para1: 'Detection of inputs is done through a single webcam for both sides (through the help of some mirrors), so no other electrical components are needed.',
	para2: 'The slider input mechanism was created with Shape Haptics, a development tool for rapidly designing and fabricating haptic mechanisms, allowing each input to have haptic feedback designed specifically for its’ action.',
	para3: 'Each slider can have a different feeling, and even the overall “stiffness” of the mechanism can be changed.',
	para4: 'More info about Shape Haptics here:'
  }
}
