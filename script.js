const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.mouseFollower();

Shery.makeMagnet(".magnet");

gsap.from(".nlink", {
    stagger: .1,
    y: 10,
    duration: 0.1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate(".toptext h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2", {
    y: 40,
    opacity: 0,
    stagger: .3,
    ease: Expo,
    duration: 1.5,
})

Shery.imageEffect(".center .imgwraper img", {
    style: 3,
    config: { "uFrequencyX": { "value": 1.53, "range": [0, 100] }, "uFrequencyY": { "value": 9.92, "range": [0, 100] }, "uFrequencyZ": { "value": 36.64, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 21.68 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7472344223407004 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.55, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

gsap.from(".center .imgwraper img", {
    z: -3,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})

Shery.imageEffect(".left .imgwraper img", {
    style: 5,
    config: { "uFrequencyX": { "value": 13.74, "range": [0, 100] }, "uFrequencyY": { "value": 8.4, "range": [0, 100] }, "uFrequencyZ": { "value": 13.74, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 15.43 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7587373167981961 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.58, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

Shery.imageEffect(".left .imgwaper img", {
    style: 4,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 0.99, "range": [0, 5] }, "uFrequency": { "value": 3.36, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 6.77 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7587373167981961 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.43, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }, "uFrequencyX": { "value": 13.74, "range": [0, 100] }, "uFrequencyY": { "value": 8.4, "range": [0, 100] }, "uFrequencyZ": { "value": 13.74, "range": [0, 100] } },
})

Shery.imageEffect(".right .imgwaper img", {
    style: 6,
    config: { "noiseDetail": { "value": 8.4, "range": [0, 100] }, "distortionAmount": { "value": 4.58, "range": [0, 10] }, "scale": { "value": 40.46, "range": [0, 100] }, "speed": { "value": 0.52, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6688023012552301 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.43, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 6.77 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }, "uColor": { "value": false }, "uSpeed": { "value": 1, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 0.99, "range": [0, 5] }, "uFrequency": { "value": 3.36, "range": [0, 10] }, "uFrequencyX": { "value": 13.74, "range": [0, 100] }, "uFrequencyY": { "value": 8.4, "range": [0, 100] }, "uFrequencyZ": { "value": 13.74, "range": [0, 100] } }
})

Shery.imageEffect(".bimg", {
    style: 5,
    config: { "a": { "value": 2.06, "range": [0, 30] }, "b": { "value": -0.98, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.8106239959414898 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 2.6, "range": [1, 15] }, "durationOut": { "value": 1.15, "range": [0.1, 5] }, "durationIn": { "value": 1.15, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.03, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 31 } }, "discard_threshold": { "value": 0.27, "range": [0, 1] }, "antialias_threshold": { "value": 0.02, "range": [0, 0.1] }, "noise_height": { "value": 0.2, "range": [0, 2] }, "noise_scale": { "value": 37.4, "range": [0, 100] } },
    gooey: true,
})

document.querySelector("#fbtn").addEventListener("mouseover", function () {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1.5,
        ease: Power3,
    })
})

document.querySelector("#fbtn").addEventListener("mouseleave", function () {
    gsap.to("#future video", {
        opacity: 0,
        duration: 1.5,
        ease: Power3,
    })
})