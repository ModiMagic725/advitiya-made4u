/* =========================================================
   ADVITIYA MADE4U — NO BUILD / VANILLA JS  (v2)
   Replace brand links and demo image URLs here only.
   ========================================================= */

const BRAND = {
  name: "Advitiya Made4U",
  instagram: "https://www.instagram.com/advitiya_made4u/",
  whatsapp: "https://wa.me/YOUR_NUMBER",
  email: "YOUR_EMAIL@example.com"
};

const FALLBACK_IMAGE =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100">
    <rect width="900" height="1100" fill="#eee6da"/>
    <circle cx="450" cy="430" r="190" fill="#e8c7c5" opacity=".65"/>
    <circle cx="450" cy="430" r="115" fill="#fffdf9" opacity=".8"/>
    <path d="M450 300c70 45 85 105 0 185-85-80-70-140 0-185Z" fill="#c98f91" opacity=".55"/>
    <text x="450" y="760" text-anchor="middle" font-family="Georgia,serif" font-size="42" fill="#641f35">ADVITIYA MADE4U</text>
    <text x="450" y="820" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" letter-spacing="4" fill="#5a4b49">HANDMADE MEMORY</text>
  </svg>`);

const siteImages = {
  hero: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1800&q=85",
  story: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1500&q=85",
  flowers: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1500&q=85",
  personalization: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
  gifts: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85",
  instagram1: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=82",
  instagram2: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=82",
  instagram3: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=82",
  instagram4: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=82"
};

const products = [
  {id:1,name:"Rose Memory Pendant",category:"Real Flower Jewellery",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",description:"A delicate keepsake for a flower that means something."},
  {id:2,name:"Blush Flower Earrings",category:"Earrings",image:"https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",description:"Soft floral detail sealed into an everyday silhouette."},
  {id:3,name:"Golden Resin Bracelet",category:"Bracelets",image:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85",description:"Warm gold accents with a handmade resin finish."},
  {id:4,name:"Initial Pendant",category:"Personalized Jewellery",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",description:"Your initial, turned into a tiny personal signature."},
  {id:5,name:"Preserved Flower Necklace",category:"Real Flower Jewellery",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",description:"A floral memory suspended in a luminous resin form."},
  {id:6,name:"Personalized Rakhi",category:"Rakhis",image:"https://images.unsplash.com/photo-1627293509201-cd8c0a5e6f7c?auto=format&fit=crop&w=900&q=85",description:"A Rakhi made around your name, colours and bond."},
  {id:7,name:"Memory Frame",category:"Personalized Frames",image:"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=85",description:"A little piece of a special day, kept on display."},
  {id:8,name:"Custom Gift Box",category:"Customized Gifts",image:"https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=85",description:"A warm, considered gift made to feel unmistakably yours."}
];

const collectionItems = [
  products[1], products[0], products[2], products[3], products[4], products[5], products[6]
];

const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const COARSE = window.matchMedia("(hover:none), (pointer:coarse)").matches;

function safeImage(img, src) {
  if (!img) return;
  img.src = src || FALLBACK_IMAGE;
  img.onerror = () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "true";
    img.src = FALLBACK_IMAGE;
  };
}

function setBrandLinks() {
  $$("[data-instagram]").forEach(a => a.href = BRAND.instagram);
  $$("[data-whatsapp]").forEach(a => a.href = BRAND.whatsapp);
  $$("[data-email]").forEach(a => {
    a.href = `mailto:${BRAND.email}`;
    a.textContent = BRAND.email === "YOUR_EMAIL@example.com" ? "Email" : BRAND.email;
  });
  $$("[data-site-image]").forEach(img => safeImage(img, siteImages[img.dataset.siteImage]));
  $$("[data-product-image]").forEach(img => {
    const product = products.find(p => p.id === Number(img.dataset.productImage));
    safeImage(img, product?.image);
  });
}

function renderCollection() {
  const grid = $("#collection-grid");
  if (!grid) return;
  grid.innerHTML = collectionItems.map((p, i) => `
    <article class="collection-card cursor-label" data-cursor="VIEW">
      <div class="card-img-wrap"><img loading="lazy" src="${p.image}" alt="${p.name} — ${p.category}"></div>
      <div class="card-meta">
        <span class="card-number">0${i + 1}</span>
        <div><h3>${p.name}</h3><p>${p.category}</p></div>
        <span class="card-cta">↗</span>
      </div>
    </article>
  `).join("");
  $$("img", grid).forEach(img => {
    img.addEventListener("error", () => {
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "true";
        img.src = FALLBACK_IMAGE;
      }
    });
  });
}

function renderWall() {
  const wall = $("#wall-products");
  if (!wall) return;
  const positions = [
    [8,10,0,-10,-30,1], [38,3,80,7,-90,.8], [68,16,-30,-8,20,1.15],
    [20,39,55,11,-50,.85], [51,34,-70,-7,55,1.1], [77,46,50,5,-30,.9],
    [9,67,-80,9,25,1.15], [38,65,30,-8,-45,.8]
  ];
  wall.innerHTML = products.map((p, i) => {
    const [x,y,z,rx,rz,s] = positions[i];
    return `<article class="wall-product" data-depth="${z}" style="left:${x}%;top:${y}%;transform:translate3d(0,0,${z}px) rotateX(${rx}deg) rotateZ(${rz}deg) scale(${s})">
      <img class="wall-img" loading="lazy" src="${p.image}" alt="${p.name}">
      <div class="wall-product-info"><span>${p.category}</span><strong>${p.name}</strong></div>
    </article>`;
  }).join("");
  $$(".wall-img", wall).forEach(img => img.addEventListener("error", () => {
    if (!img.dataset.fallbackApplied) { img.dataset.fallbackApplied = "true"; img.src = FALLBACK_IMAGE; }
  }));
}

function renderInstagram() {
  const grid = $("#ig-grid");
  if (!grid) return;
  const images = [
    [siteImages.instagram1,"Floral jewellery detail"],
    [siteImages.instagram2,"Personalized necklace detail"],
    [siteImages.instagram3,"Handmade jewellery detail"],
    [siteImages.instagram4,"Warm resin jewellery detail"]
  ];
  grid.innerHTML = images.map(([src,alt]) => `<a class="ig-tile cursor-label" data-cursor="OPEN" href="${BRAND.instagram}" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${src}" alt="${alt}"></a>`).join("");
  $$(".ig-tile img", grid).forEach(img => img.addEventListener("error", () => img.src = FALLBACK_IMAGE));
}

/* NEW — put gift-card images inside a zoom/parallax-safe wrapper */
function wrapCardImages() {
  $$(".gift-card img").forEach(img => {
    if (img.parentElement.classList.contains("card-img-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "card-img-wrap";
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
  });
}

/* NEW — dependency-free word splitter for display titles */
function splitWords(el) {
  if (el.dataset.splitDone) return el.querySelectorAll(".word-inner");
  el.dataset.splitDone = "1";
  const walk = node => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const word = document.createElement("span");
          word.className = "word";
          const inner = document.createElement("span");
          inner.className = "word-inner";
          inner.textContent = part;
          word.appendChild(inner);
          frag.appendChild(word);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1 && child.tagName !== "BR") {
        walk(child);
      }
    });
  };
  walk(el);
  return el.querySelectorAll(".word-inner");
}

function initPreloader() {
  document.body.classList.add("is-loading");
  const loader = $("#preloader"), progress = $("#loader-progress"), percent = $("#loader-percent");
  const finish = () => {
    loader.classList.add("is-done");
    document.body.classList.remove("is-loading");
    window.__lenis?.start();
    animateHeroIn();
  };
  if (!window.gsap || REDUCED) {
    if (progress) progress.style.width = "100%";
    if (percent) percent.textContent = "100%";
    setTimeout(() => {
      loader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      window.__lenis?.start();
      animateHeroIn();
    }, REDUCED ? 200 : 500);
    return;
  }
  window.__lenis?.stop();
  const state = {value:0};
  gsap.to(state, {
    value:100, duration:1.4, ease:"power3.out",
    onUpdate:() => {
      progress.style.width = `${state.value}%`;
      percent.textContent = `${Math.round(state.value)}%`;
    },
    onComplete:() => {
      gsap.timeline({onComplete:finish})
        .to(".loader-brand,.loader-line,.loader-percent",{opacity:0,y:-16,duration:.4,ease:"power2.in",stagger:.05})
        .to(loader,{clipPath:"inset(0% 0% 100% 0%)",duration:.85,ease:"power4.inOut"},"-=.05");
    }
  });
}

function closeMobileMenu() {
  const toggle = $("#menu-toggle"), menu = $("#mobile-menu");
  toggle?.classList.remove("is-open");
  menu?.classList.remove("is-open");
  menu?.setAttribute("aria-hidden","true");
  document.body.classList.remove("is-loading");
  window.__lenis?.start();
}

function initNavigation() {
  const header = $("#site-header");
  const toggle = $("#menu-toggle"), menu = $("#mobile-menu");
  const update = () => header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", update, {passive:true}); update();

  toggle?.addEventListener("click", () => {
    const open = toggle.classList.toggle("is-open");
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("is-loading", open);
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
  });
  $$("#mobile-menu a").forEach(a => a.addEventListener("click", closeMobileMenu));
}

function initCursor() {
  if (COARSE) return;
  const cursor = $("#cursor"), follower = $("#cursor-follower");
  if (!cursor || !follower || !window.gsap) return;
  let mx = innerWidth/2, my = innerHeight/2, fx = mx, fy = my;
  window.addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; document.body.classList.add("cursor-active"); }, {passive:true});
  gsap.ticker.add(() => {
    fx += (mx-fx)*.16; fy += (my-fy)*.16;
    gsap.set(cursor,{x:mx,y:my}); gsap.set(follower,{x:fx,y:fy});
  });
  document.addEventListener("mouseover", e => {
    const labelTarget = e.target.closest("[data-cursor],.cursor-label");
    const linkTarget = e.target.closest("a,button,.magnetic,input,label");
    if (labelTarget) {
      cursor.querySelector("span").textContent = labelTarget.dataset.cursor || "OPEN";
      document.body.classList.add("cursor-view");
    } else if (linkTarget) {
      document.body.classList.add("cursor-hover");
    }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest("[data-cursor],.cursor-label")) document.body.classList.remove("cursor-view");
    if (e.target.closest("a,button,.magnetic,input,label")) document.body.classList.remove("cursor-hover");
  });
}

function initMagneticButtons() {
  if (COARSE || !window.gsap) return;
  $$(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX-r.left-r.width/2)*.14, y = (e.clientY-r.top-r.height/2)*.14;
      gsap.to(el,{x,y,duration:.35,ease:"power3.out"});
    });
    el.addEventListener("mouseleave",() => gsap.to(el,{x:0,y:0,duration:.5,ease:"elastic.out(1,.55)"}));
  });
}

function animateHeroIn() {
  if (!window.gsap) return;
  if (REDUCED) {
    gsap.set(".hero .reveal-up",{opacity:1,y:0});
    gsap.set(".hero .reveal-line",{yPercent:0});
    gsap.set("#hero-canvas",{opacity:1});
    return;
  }
  const tl = gsap.timeline({defaults:{ease:"power3.out"}});
  tl.fromTo("#hero-canvas",{opacity:0},{opacity:1,duration:1.8,ease:"power2.out"},0)
    .fromTo(".hero .reveal-line",{yPercent:118},{yPercent:0,duration:1.3,ease:"power4.out",stagger:.12},.05)
    .fromTo(".hero .reveal-up",{opacity:0,y:26,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:1,stagger:.1},.25)
    .fromTo([".hero-caption",".scroll-note"],{opacity:0},{opacity:.55,duration:.9},.9);
}

function initLenis() {
  if (typeof Lenis === "undefined" || !window.gsap) return;
  const lenis = new Lenis({lerp:.09, smoothWheel:true, smoothTouch:false});
  window.__lenis = lenis;
  lenis.on("scroll", () => { if (window.ScrollTrigger) ScrollTrigger.update(); });
  gsap.ticker.add(time => lenis.raf(time*1000));
  gsap.ticker.lagSmoothing(500, 33);
  lenis.stop(); // released after the preloader
}

/* NEW — buttery anchor navigation through Lenis */
function initAnchors() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      closeMobileMenu();
      if (window.__lenis) {
        window.__lenis.scrollTo(target, {offset:-70, duration:1.5, easing:t => 1-Math.pow(1-t,4)});
      } else {
        target.scrollIntoView({behavior:"smooth"});
      }
    });
  });
}

function initScrollAnimations() {
  if (!window.gsap || !window.ScrollTrigger) {
    $$(".reveal-up").forEach(el => el.classList.remove("reveal-up"));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({nullTargetWarn:false});
  ScrollTrigger.config({ignoreMobileResize:true});
  const fancy = !REDUCED;

  /* display titles get word reveals instead of the plain fade */
  $$(".display-title").forEach(t => { if (t.classList.contains("reveal-up")) t.classList.remove("reveal-up"); });

  $$(".reveal-up").forEach(el => {
    if (el.closest(".hero")) return;
    gsap.fromTo(el,{opacity:0,y:35},{
      opacity:1,y:0,duration:1,ease:"power3.out",
      scrollTrigger:{trigger:el,start:"top 88%",once:true}
    });
  });

  /* NEW — 3D word-by-word title reveals */
  if (fancy) $$(".display-title").forEach(title => {
    const words = splitWords(title);
    if (!words.length) return;
    gsap.fromTo(words,
      {yPercent:70, opacity:0, rotationX:-45},
      {yPercent:0, opacity:1, rotationX:0, transformOrigin:"50% 100%", duration:1.1, ease:"power3.out", stagger:.05,
       scrollTrigger:{trigger:title, start:"top 86%", once:true}});
  });

  /* image parallax */
  gsap.fromTo(".story-image",{yPercent:-5},{yPercent:5,ease:"none",scrollTrigger:{trigger:".story-image-wrap",start:"top bottom",end:"bottom top",scrub:.8}});
  gsap.fromTo(".flower-visual img",{yPercent:-4},{yPercent:4,ease:"none",scrollTrigger:{trigger:".flower-section",start:"top bottom",end:"bottom top",scrub:.8}});

  /* NEW — cinematic clip-path image reveals */
  if (fancy) $$(".story-image-wrap,.flower-visual").forEach(wrap => {
    const img = wrap.querySelector("img");
    const tl = gsap.timeline({scrollTrigger:{trigger:wrap,start:"top 80%",once:true}});
    tl.fromTo(wrap,{clipPath:"inset(12% 9% 12% 9%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.25,ease:"power4.out",clearProps:"clipPath"});
    if (img) tl.fromTo(img,{scale:1.28},{scale:1.12,duration:1.6,ease:"power3.out"},0);
  });

  /* NEW — hero scrolls away with depth (content recedes, glows drift) */
  if (fancy) gsap.timeline({scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}})
    .to(".hero-content",{yPercent:-12,opacity:.3,scale:.965,ease:"none"},0)
    .to("#hero-canvas",{yPercent:14,ease:"none"},0)
    .to(".hero-glow-a",{yPercent:36,ease:"none"},0)
    .to(".hero-glow-b",{yPercent:-22,ease:"none"},0);

  /* Keep the transition into personalization and the gift section continuous. */
  const custom = document.querySelector(".custom");
  const gifts = document.querySelector(".gifts");
  if (custom && gifts) {
    gsap.fromTo(custom.querySelector(".custom-copy"),
      {y:0,opacity:1},
      {y:-24,opacity:.96,ease:"none",scrollTrigger:{trigger:custom,start:"bottom 92%",end:"bottom 45%",scrub:.8}}
    );
    gsap.fromTo(gifts.querySelector(".gifts-head"),
      {y:28,opacity:.88},
      {y:0,opacity:1,ease:"none",scrollTrigger:{trigger:gifts,start:"top 92%",end:"top 55%",scrub:.8}}
    );
  }

  const wall = $(".wall-stage");
  if (wall) {
    const productsEls = $$(".wall-product");
    productsEls.forEach((el,i) => {
      gsap.fromTo(el,{opacity:0,filter:"blur(5px)"},{
        opacity:1,filter:"blur(0px)",duration:1,
        scrollTrigger:{trigger:wall,start:`${8+i*4}% bottom`,end:`${20+i*5}% center`,scrub:true}
      });
    });
    gsap.to(".wall-copy-one",{opacity:1,y:-10,scrollTrigger:{trigger:wall,start:"10% center",end:"27% center",scrub:true}});
    gsap.to(".wall-copy-two",{opacity:1,y:-10,scrollTrigger:{trigger:wall,start:"36% center",end:"53% center",scrub:true}});
    gsap.to(".wall-copy-three",{opacity:1,y:-10,scrollTrigger:{trigger:wall,start:"65% center",end:"82% center",scrub:true}});
    gsap.to(productsEls,{y:i=>i%2?-130:110,z:i=>i%3*100,rotationZ:i=>i%2?10:-8,ease:"none",stagger:.03,force3D:true,scrollTrigger:{trigger:wall,start:"top bottom",end:"bottom top",scrub:1}});
  }

  /* NEW — collection cards: staggered entrance + per-card image parallax */
  const cards = $$(".collection-card");
  if (cards.length && fancy) {
    gsap.set(cards,{opacity:0,y:70});
    ScrollTrigger.batch(cards,{start:"top 88%",once:true,onEnter:els => gsap.to(els,{opacity:1,y:0,duration:1.1,ease:"power3.out",stagger:.12,overwrite:true})});
    cards.forEach(card => {
      const img = card.querySelector(".card-img-wrap img");
      if (!img) return;
      gsap.fromTo(img,{yPercent:-6,scale:1.15},{yPercent:6,scale:1.15,ease:"none",scrollTrigger:{trigger:card,start:"top bottom",end:"bottom top",scrub:true}});
    });
  }

  /* NEW — instagram tiles stagger in */
  const tiles = $$(".ig-tile");
  if (tiles.length && fancy) {
    gsap.set(tiles,{opacity:0,y:50});
    ScrollTrigger.batch(tiles,{start:"top 92%",once:true,onEnter:els => gsap.to(els,{opacity:1,y:0,duration:.9,ease:"power3.out",stagger:.09})});
  }

  /* NEW — gift cards entrance */
  if (fancy) gsap.fromTo(".gift-card",{opacity:0,y:60},{opacity:1,y:0,duration:1,ease:"power3.out",stagger:.08,scrollTrigger:{trigger:".gifts",start:"top 72%",once:true}});

  if (window.matchMedia("(min-width:901px)").matches) {
    const giftsTrack = document.querySelector("#gifts-track");
    const giftsSection = document.querySelector(".gifts");
    if (giftsTrack && giftsSection) {
      /* NEW — gold progress line for the horizontal gallery */
      const bar = document.createElement("div");
      bar.className = "gift-progress";
      bar.innerHTML = "<span></span>";
      giftsSection.querySelector(".gifts-head")?.insertAdjacentElement("afterend", bar);
      const setBar = gsap.quickSetter(bar.firstElementChild,"scaleX");
      const getDistance = () => Math.max(0, giftsTrack.scrollWidth - window.innerWidth + window.innerWidth * .08);
      gsap.to(giftsTrack,{
        x:() => -getDistance(),
        ease:"none",
        force3D:true,
        scrollTrigger:{
          trigger:giftsSection,
          start:"top top",
          end:() => `+=${Math.max(1200, getDistance() * 1.15)}`,
          pin:true,
          pinSpacing:true,
          scrub:.8,
          anticipatePin:1,
          invalidateOnRefresh:true,
          fastScrollEnd:true,
          onUpdate:self => setBar(self.progress)
        }
      });
    }
  }

  /* NEW — top scroll-progress hairline */
  if (document.querySelector(".scroll-progress span")) {
    gsap.to(".scroll-progress span",{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.3}});
  }

  const refreshScroll = () => requestAnimationFrame(() => ScrollTrigger.refresh());
  if (document.fonts?.ready) document.fonts.ready.then(refreshScroll);
  window.addEventListener("load", refreshScroll, {once:true});
}

/* NEW — hero pointer parallax layers (title, copy, glows) */
function initHeroPointer() {
  if (REDUCED || COARSE || !window.gsap || !document.querySelector(".hero-title")) return;
  const q = (t,p) => gsap.quickTo(t,p,{duration:.9,ease:"power3.out"});
  const tX=q(".hero-title","x"), tY=q(".hero-title","y");
  const cX=q(".hero-copy","x"), cY=q(".hero-copy","y");
  const gAX=q(".hero-glow-a","x"), gAY=q(".hero-glow-a","y");
  const gBX=q(".hero-glow-b","x"), gBY=q(".hero-glow-b","y");
  window.addEventListener("pointermove", e => {
    const nx = e.clientX/innerWidth-.5, ny = e.clientY/innerHeight-.5;
    tX(nx*-22); tY(ny*-12);
    cX(nx*-10); cY(ny*-6);
    gAX(nx*60); gAY(ny*45);
    gBX(nx*-40); gBY(ny*-30);
  }, {passive:true});
}

/* NEW — marquee that speeds up with scroll velocity */
function initMarquee() {
  const track = $("#marquee-track");
  if (!track || !window.gsap || REDUCED) return;
  const tween = gsap.to(track,{xPercent:-50,ease:"none",duration:26,repeat:-1});
  if (window.__lenis) {
    let boost = 1, target = 1;
    window.__lenis.on("scroll", e => { target = 1 + Math.min(Math.abs(e.velocity)*.045, 2.6); });
    gsap.ticker.add(() => {
      target += (1-target)*.06;
      boost += (target-boost)*.09;
      tween.timeScale(boost);
    });
  }
}

/* NEW — idle floating + pointer rotation for 3D layers */
function initFloaters() {
  if (REDUCED || !window.gsap) return;
  $$(".wall-product").forEach((el,i) => {
    gsap.to(el,{yPercent:i%2?-4:4,duration:2.4+(i%4)*.55,ease:"sine.inOut",yoyo:true,repeat:-1,delay:i*.12});
  });
  const stage = $(".wall-stage");
  if (stage && !COARSE) {
    const wy = gsap.quickTo("#wall-products","rotationY",{duration:1.2,ease:"power2.out"});
    const wx = gsap.quickTo("#wall-products","rotationX",{duration:1.2,ease:"power2.out"});
    stage.addEventListener("pointermove", e => {
      wy((e.clientX/innerWidth-.5)*7);
      wx((e.clientY/innerHeight-.5)*-5);
    });
    stage.addEventListener("pointerleave", () => { wy(0); wx(0); });
  }
  const jewel = $(".preview-jewel");
  if (jewel) {
    gsap.to(jewel,{y:-12,duration:3.4,ease:"sine.inOut",yoyo:true,repeat:-1});
    if (!COARSE) {
      gsap.set(jewel,{transformPerspective:800});
      const ry = gsap.quickTo(jewel,"rotationY",{duration:.9,ease:"power2.out"});
      const rx = gsap.quickTo(jewel,"rotationX",{duration:.9,ease:"power2.out"});
      const zone = $(".custom-preview");
      zone?.addEventListener("pointermove", e => {
        const r = zone.getBoundingClientRect();
        ry(((e.clientX-r.left)/r.width-.5)*10);
        rx(((e.clientY-r.top)/r.height-.5)*-8);
      });
      zone?.addEventListener("pointerleave", () => { ry(0); rx(0); });
    }
  }
}

/* NEW — 3D tilt + moving light glare on cards */
function initTilt() {
  if (COARSE || REDUCED || !window.gsap) return;
  $$(".collection-card, .gift-card").forEach(card => {
    gsap.set(card,{transformPerspective:900});
    const glare = document.createElement("div");
    glare.className = "tilt-glare";
    card.appendChild(glare);
    const rx = gsap.quickTo(card,"rotationX",{duration:.7,ease:"power2.out"});
    const ry = gsap.quickTo(card,"rotationY",{duration:.7,ease:"power2.out"});
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX-r.left)/r.width, py = (e.clientY-r.top)/r.height;
      ry((px-.5)*7); rx((.5-py)*7);
      gsap.set(glare,{opacity:1,background:`radial-gradient(circle at ${px*100}% ${py*100}%, rgba(255,255,255,.2), transparent 55%)`});
    });
    card.addEventListener("pointerleave", () => {
      ry(0); rx(0);
      gsap.to(glare,{opacity:0,duration:.5});
    });
  });
}

async function initThreeScene() {
  const canvas = $("#hero-canvas");
  if (!canvas) return;
  try {
    const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js");
    const {GLTFLoader} = await import("https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js");

    const isMobile = window.matchMedia("(max-width:600px)").matches;
    const renderer = new THREE.WebGLRenderer({canvas,alpha:true,antialias:!isMobile,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1,isMobile?1.15:1.75));
    renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    // const camera = new THREE.ParallaxCamera ? new THREE.ParallaxCamera() : new THREE.PerspectiveCamera(34,canvas.clientWidth/canvas.clientHeight,.1,100);
    const camera = new THREE.PerspectiveCamera(34,canvas.clientWidth/canvas.clientHeight,.1,100);
    camera.position.set(0,0,8.5);
    const group = new THREE.Group();
    scene.add(group);

    scene.add(new THREE.HemisphereLight(0xfff7ed,0x3c1624,2.2));
    const key = new THREE.DirectionalLight(0xffe7ca,3.5); key.position.set(3,5,5); scene.add(key);
    const rim = new THREE.PointLight(0xe8c7c5,12,18); rim.position.set(-4,1,3); scene.add(rim);

    const gold = new THREE.MeshStandardMaterial({color:0xc9a45c,metalness:.85,roughness:.2});
    const resin = new THREE.MeshPhysicalMaterial({color:0xe8c7c5,transparent:true,opacity:.62,roughness:.16,metalness:.05,transmission:.35,thickness:.7,clearcoat:1,clearcoatRoughness:.1});
    const cream = new THREE.MeshPhysicalMaterial({color:0xfff8ef,transparent:true,opacity:.85,roughness:.25,transmission:.2,clearcoat:1});

    const pendant = new THREE.Mesh(new THREE.TorusGeometry(1.25,.12,20,80),gold);
    pendant.rotation.x = Math.PI/2; group.add(pendant);

    const inner = new THREE.Mesh(new THREE.SphereGeometry(.92,40,40),resin);
    inner.scale.set(.78,1.0,.28); inner.position.z=.04; group.add(inner);

    const petals = new THREE.Group();
    const count = isMobile ? 5 : 8;
    for(let i=0;i<count;i++){
      const p=new THREE.Mesh(new THREE.SphereGeometry(.42,18,18),cream);
      const a=i/count*Math.PI*2;
      p.position.set(Math.cos(a)*.55,Math.sin(a)*.55,.35);
      p.scale.set(.65,1,.18); p.rotation.z=a+.2; petals.add(p);
    }
    group.add(petals);
    const center=new THREE.Mesh(new THREE.SphereGeometry(.27,24,24),gold); center.position.z=.4; group.add(center);

    /* NEW — floating beaded chain above the pendant */
    const chain = new THREE.Group();
    const beads = isMobile ? 11 : 17;
    for(let i=0;i<beads;i++){
      const x = -1.55 + 3.1*i/(beads-1);
      const bead = new THREE.Mesh(new THREE.SphereGeometry(.062,10,10),gold);
      bead.position.set(x, 2.1 - .62*(1-Math.pow(x/1.55,2)), 0);
      chain.add(bead);
    }
    scene.add(chain);

    /* NEW — drifting crystal gems around the pendant */
    const gems = [];
    const gemGeos = [new THREE.OctahedronGeometry(.16), new THREE.OctahedronGeometry(.1), new THREE.TetrahedronGeometry(.14)];
    const gemCount = isMobile ? 4 : 7;
    for(let i=0;i<gemCount;i++){
      const gem = new THREE.Mesh(gemGeos[i%3], i%2 ? resin : gold);
      const a = (i/gemCount)*Math.PI*2 + Math.random();
      gem.position.set(Math.cos(a)*(2.3+Math.random()*1.5),(Math.random()-.5)*3.4,(Math.random()-.5)*2.5);
      gem.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);
      gem.userData = {spin:.4+Math.random()*.7, fl:Math.random()*6.28, baseY:gem.position.y};
      gems.push(gem); scene.add(gem);
    }

    const particles = new THREE.Group();
    const particleCount=isMobile?45:95;
    for(let i=0;i<particleCount;i++){
      const s=new THREE.Mesh(new THREE.SphereGeometry(.018+Math.random()*.025,8,8),gold);
      s.position.set((Math.random()-.5)*6,(Math.random()-.5)*5,(Math.random()-.5)*3);
      particles.add(s);
    }
    scene.add(particles);

    let mixerModel=null;
    try {
      const loader=new GLTFLoader();
      const gltf=await new Promise((resolve,reject)=>{
        loader.load("assets/models/product.glb",resolve,undefined,reject);
      });
      if(gltf?.scene){
        group.clear();
        mixerModel=gltf.scene;
        mixerModel.scale.setScalar(2);
        group.add(mixerModel);
      }
    } catch (_) { /* Procedural fallback intentionally remains active. */ }

    const mouse={x:0,y:0}, target={x:0,y:0};
    window.addEventListener("pointermove",e=>{
      target.x=(e.clientX/window.innerWidth-.5)*.7;
      target.y=(e.clientY/window.innerHeight-.5)*.5;
    },{passive:true});

    /* NEW — pause rendering when the hero is offscreen */
    let heroVisible = true;
    new IntersectionObserver(entries => { heroVisible = entries[0].isIntersecting; }).observe(canvas);

    const clock=new THREE.Clock();
    let rafId=0;
    const animate=()=>{
      rafId=requestAnimationFrame(animate);
      if(!heroVisible) return;
      const t=clock.getElapsedTime();
      mouse.x+=(target.x-mouse.x)*.04; mouse.y+=(target.y-mouse.y)*.04;
      group.rotation.y=mouse.x+.12*Math.sin(t*.35);
      group.rotation.x=mouse.y*.5+.08*Math.cos(t*.3);
      group.position.y=Math.sin(t*.65)*.18;
      chain.rotation.z=Math.sin(t*.5)*.045;
      chain.position.y=Math.sin(t*.65+.6)*.1;
      gems.forEach(g=>{
        g.rotation.x+=g.userData.spin*.005;
        g.rotation.y+=g.userData.spin*.008;
        g.position.y=g.userData.baseY+Math.sin(t*g.userData.spin+g.userData.fl)*.16;
      });
      particles.rotation.y=t*.035;
      particles.rotation.x=Math.sin(t*.2)*.08;
      camera.position.x+=(mouse.x*.7-camera.position.x)*.04;
      camera.position.y+=(-mouse.y*.5-camera.position.y)*.04;
      camera.lookAt(0,0,0);
      renderer.render(scene,camera);
    };
    animate();

    const resize=()=>{
      const w=canvas.clientWidth,h=canvas.clientHeight;
      if(!w||!h)return;
      camera.aspect=w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h,false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,isMobile?1.15:1.75));
    };
    window.addEventListener("resize",resize);
    window.addEventListener("pagehide",()=>cancelAnimationFrame(rafId),{once:true});
  } catch (error) {
    console.warn("3D hero unavailable; using image/gradient fallback.",error);
    canvas.style.display="none";
  }
}

async function initInteractiveJewellery() {
  const canvas=$("#jewel-canvas");
  if(!canvas)return;
  try{
    const THREE=await import("https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js");
    const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(35,canvas.clientWidth/canvas.clientHeight,.1,100);
    camera.position.z=6;
    const root=new THREE.Group();scene.add(root);
    scene.add(new THREE.HemisphereLight(0xffffff,0x4a2630,2.4));
    const light=new THREE.DirectionalLight(0xffe7c4,4);light.position.set(3,4,5);scene.add(light);
    const fill=new THREE.PointLight(0xe8c7c5,9,12);fill.position.set(-3,-1,3);scene.add(fill);

    const ringMat=new THREE.MeshStandardMaterial({color:0xc9a45c,metalness:.9,roughness:.18});
    const resinMat=new THREE.MeshPhysicalMaterial({color:0xdcaeb0,transparent:true,opacity:.66,roughness:.15,transmission:.45,thickness:.8,clearcoat:1});
    root.add(new THREE.Mesh(new THREE.TorusGeometry(1.15,.1,20,80),ringMat));
    const gem=new THREE.Mesh(new THREE.IcosahedronGeometry(.92,4),resinMat);gem.scale.set(.78,1,.35);gem.rotation.z=.2;root.add(gem);
    const flower=new THREE.Group();
    for(let i=0;i<7;i++){
      const p=new THREE.Mesh(new THREE.SphereGeometry(.28,18,18),new THREE.MeshPhysicalMaterial({color:0xfff5e8,roughness:.25,transmission:.15}));
      const a=i/7*Math.PI*2;p.position.set(Math.cos(a)*.42,Math.sin(a)*.42,.32);p.scale.set(.7,1,.18);p.rotation.z=a;flower.add(p);
    }
    root.add(flower);
    root.add(new THREE.Mesh(new THREE.SphereGeometry(.16,18,18),ringMat));

    /* NEW — orbiting gold sparkles */
    const sparkles=new THREE.Group();
    const sparkCount=window.matchMedia("(max-width:600px)").matches?10:20;
    for(let i=0;i<sparkCount;i++){
      const s=new THREE.Mesh(new THREE.SphereGeometry(.018+Math.random()*.02,6,6),ringMat);
      const a=Math.random()*Math.PI*2,r=1.55+Math.random()*.9;
      s.position.set(Math.cos(a)*r,(Math.random()-.5)*2.6,Math.sin(a)*r);
      sparkles.add(s);
    }
    scene.add(sparkles);

    /* NEW — real drag-to-rotate with inertia (mouse), fixed spin button */
    const pointer={x:0,y:0},smooth={x:0,y:0};
    let dragging=false,lastX=0,rotY=0,rotVel=0;
    canvas.addEventListener("pointermove",e=>{
      const r=canvas.getBoundingClientRect();
      pointer.x=(e.clientX-r.left)/r.width-.5;
      pointer.y=(e.clientY-r.top)/r.height-.5;
      if(dragging){const dx=e.clientX-lastX;rotVel=dx*.005;rotY+=rotVel;lastX=e.clientX;}
    },{passive:true});
    canvas.addEventListener("pointerdown",e=>{
      if(e.pointerType!=="mouse")return;
      dragging=true;lastX=e.clientX;
      canvas.classList.add("dragging");
      canvas.setPointerCapture?.(e.pointerId);
    });
    const endDrag=()=>{dragging=false;canvas.classList.remove("dragging");};
    canvas.addEventListener("pointerup",endDrag);
    canvas.addEventListener("pointercancel",endDrag);
    canvas.addEventListener("pointerleave",endDrag);

    $("#jewel-spin")?.addEventListener("click",()=>{
      const from=rotY, proxy={p:0};
      gsap.to(proxy,{p:1,duration:1.7,ease:"power3.inOut",onUpdate:()=>{rotY=from+proxy.p*Math.PI*2;}});
    });

    let jewelVisible=true;
    new IntersectionObserver(en=>{jewelVisible=en[0].isIntersecting;}).observe(canvas);

    let raf=0;
    const tick=()=>{
      raf=requestAnimationFrame(tick);
      if(!jewelVisible)return;
      if(!dragging){rotY+=rotVel;rotVel*=.94;}
      smooth.x+=(pointer.x-smooth.x)*.06;smooth.y+=(pointer.y-smooth.y)*.06;
      root.rotation.y=rotY+smooth.x*.9;root.rotation.x=smooth.y*.55;
      root.position.y=Math.sin(performance.now()*.0006)*.1;
      sparkles.rotation.y=performance.now()*.00025;
      sparkles.rotation.z=Math.sin(performance.now()*.0002)*.12;
      renderer.render(scene,camera);
    };tick();
    const resize=()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
    window.addEventListener("resize",resize);
    window.addEventListener("pagehide",()=>cancelAnimationFrame(raf),{once:true});
  }catch(e){
    console.warn("Interactive jewellery unavailable; image fallback enabled.",e);
    $(".jewel-fallback").style.opacity="1";
    canvas.style.display="none";
  }
}

function initPersonalization(){
  const name=$("#custom-name"),initials=$("#custom-initials"),date=$("#custom-date");
  const previewName=$("#preview-name"),previewInitial=$("#preview-initial"),previewDate=$("#preview-date");
  const update=()=>{
    const n=(name.value.trim()||"You").slice(0,18);
    const init=(initials.value.trim()||n[0]||"T").slice(0,2).toUpperCase();
    previewName.textContent=`Made for ${n}`;
    previewInitial.textContent=init;
    previewDate.textContent=(date.value.trim()||"WITH LOVE").toUpperCase();
  };
  [name,initials,date].forEach(el=>el?.addEventListener("input",update));
  update();
}

function initSwiper(){
  if(typeof Swiper==="undefined")return;
  new Swiper(".testimonial-slider",{
    slidesPerView:1,spaceBetween:18,loop:true,speed:950,grabCursor:true,
    autoplay:{delay:5200,disableOnInteraction:false,pauseOnMouseEnter:true},
    pagination:{el:".swiper-pagination",clickable:true},
    navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"}
  });
}

function initImageLazySafety(){
  if(!("IntersectionObserver" in window))return;
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const img=entry.target;
      if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src}
      observer.unobserve(img);
    });
  },{rootMargin:"200px"});
  $$("img[data-src]").forEach(img=>observer.observe(img));
}

function initResponsiveBehavior(){
  const setMobile=()=>document.documentElement.classList.toggle("is-mobile",window.innerWidth<=900);
  setMobile();window.addEventListener("resize",setMobile);
}

function init(){
  /* safety: if GSAP ever fails to load, never leave content invisible */
  if(!window.gsap) $$(".reveal-up").forEach(el=>el.classList.remove("reveal-up"));

  setBrandLinks();
  renderCollection();
  renderWall();
  renderInstagram();
  wrapCardImages();
  initNavigation();
  initLenis();
  initPreloader();
  initCursor();
  initMagneticButtons();
  initAnchors();
  initResponsiveBehavior();
  initPersonalization();
  initSwiper();
  initImageLazySafety();
  initHeroPointer();
  initMarquee();
  initFloaters();
  initTilt();
  initScrollAnimations();
  initThreeScene();
  initInteractiveJewellery();
}

if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
else init();