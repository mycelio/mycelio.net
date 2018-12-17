function introScene(controller, windowHeight) {

  // fix intro
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0
    })
    .setPin('.intro')
    // .addIndicators({
    //   name: 'fix .intro'
    // })
    .setClassToggle('.intro', 'is-active')
    .addTo(controller);


    // fade out intro-text-1
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.20
    })
    // .addIndicators({
    //   name: 'fadeOut intro-text-1'
    // })
    .setClassToggle('.intro-text-1', 'fadeOut')
    .addTo(controller);

    // fade in intro-text-2
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.22
    })
    // .addIndicators({
    //   name: 'fadeIn intro-text-2'
    // })
    .setClassToggle('.intro-text-2', 'fadeIn')
    .addTo(controller);

    // fade in nature
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.35
    })
    // .addIndicators({
    //   name: 'fadeIn nature span'
    // })
    .setClassToggle('.intro-text-2 .nature', 'fadeIn')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.4
    })
    // .addIndicators({
    //   name: 'fadeIn nature icon'
    // })
    .setClassToggle('.connections #nature', 'fadeIn')
    .addTo(controller);


    // fade in technology
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.55
    })
    // .addIndicators({
    //   name: 'fadeIn technology span'
    // })
    .setClassToggle('.intro-text-2 .technology', 'fadeIn')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.6
    })
    // .addIndicators({
    //   name: 'fadeIn technology icon'
    // })
    .setClassToggle('.connections #technology', 'fadeIn')
    .addTo(controller);


    // fade in people
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.75
    })
    // .addIndicators({
    //   name: 'fadeIn people span'
    // })
    .setClassToggle('.intro-text-2 .people', 'fadeIn')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.8
    })
    // .addIndicators({
    //   name: 'fadeIn people icon'
    // })
    .setClassToggle('.connections #people', 'fadeIn')
    .addTo(controller);



    // fade out intro-text-2
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.9
    })
    // .addIndicators({
    //   name: 'fadeOut intro-text-2'
    // })
    .setClassToggle('.intro-text-2', 'fadeOut')
    .addTo(controller);


    // fade in intro-text-3
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*0.94
    })
    // .addIndicators({
    //   name: 'fadeIn intro-text-3'
    // })
    .setClassToggle('.intro-text-3', 'fadeIn')
    .addTo(controller);




    // draw lines
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.1
    })
    // .addIndicators({
    //   name: 'draw line-1'
    // })
    .setClassToggle('.connections #line-1', 'draw')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.1
    })
    // .addIndicators({
    //   name: 'draw lines-2'
    // })
    .setClassToggle('.connections #line-2', 'draw')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.1
    })
    // .addIndicators({
    //   name: 'draw line-3'
    // })
    .setClassToggle('.connections #line-3', 'draw')
    .addTo(controller);





    // color icons
    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.2
    })
    // .addIndicators({
    //   name: 'color people icon'
    // })
    .setClassToggle('.connections #people', 'color')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.2
    })
    // .addIndicators({
    //   name: 'color technology icon'
    // })
    .setClassToggle('.connections #technology', 'color')
    .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: '.intro',
      triggerHook: 0.1,
      offset: windowHeight*1.2
    })
    // .addIndicators({
    //   name: 'color nature icon'
    // })
    .setClassToggle('.connections #nature', 'color')
    .addTo(controller);




}

export default introScene;