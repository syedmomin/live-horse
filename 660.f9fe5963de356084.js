"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[660],{7660:(ut,oe,P)=>{P.r(oe),P.d(oe,{HomeModule:()=>Be});var U=P(6895),_=P(7340),n=P(4650);let ve=(()=>{class c{constructor(){}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-modal-video"]],decls:7,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close"],[1,"modal-body"]],template:function(o,e){1&o&&(n.TgZ(0,"div",0)(1,"h5",1),n._uU(2,"video Name"),n.qZA(),n._UZ(3,"button",2),n.qZA(),n.TgZ(4,"div",3)(5,"h1"),n._uU(6,"video pending"),n.qZA()())}}),c})();var Re=P(4040),ne=P(2655),Ae=P(5643),s=P(6682);const ie={type:"change"},q={type:"start"},ae={type:"end"},G=new s.zHn,se=new s.JOQ,ke=Math.cos(70*s.M8C.DEG2RAD);class je extends s.pBf{constructor(h,o){super(),this.object=h,this.domElement=o,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new s.Pa4,this.cursor=new s.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:s.RsA.ROTATE,MIDDLE:s.RsA.DOLLY,RIGHT:s.RsA.PAN},this.touches={ONE:s.QmN.ROTATE,TWO:s.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",te),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(ie),e.update(),r=i.NONE},this.update=function(){const t=new s.Pa4,a=(new s._fP).setFromUnitVectors(h.up,new s.Pa4(0,1,0)),u=a.clone().invert(),m=new s.Pa4,g=new s._fP,A=new s.Pa4,b=2*Math.PI;return function(dt=null){const Oe=e.object.position;t.copy(Oe).sub(e.target),t.applyQuaternion(a),d.setFromVector3(t),e.autoRotate&&r===i.NONE&&D(function Ke(t){return null!==t?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}(dt)),e.enableDamping?(d.theta+=p.theta*e.dampingFactor,d.phi+=p.phi*e.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let E=e.minAzimuthAngle,T=e.maxAzimuthAngle;isFinite(E)&&isFinite(T)&&(E<-Math.PI?E+=b:E>Math.PI&&(E-=b),T<-Math.PI?T+=b:T>Math.PI&&(T-=b),d.theta=E<=T?Math.max(E,Math.min(T,d.theta)):d.theta>(E+T)/2?Math.max(E,d.theta):Math.min(T,d.theta)),d.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,d.phi)),d.makeSafe(),!0===e.enableDamping?e.target.addScaledVector(x,e.dampingFactor):e.target.add(x),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor);let F=!1;if(e.zoomToCursor&&B||e.object.isOrthographicCamera)d.radius=$(d.radius);else{const O=d.radius;d.radius=$(d.radius*C),F=O!=d.radius}if(t.setFromSpherical(d),t.applyQuaternion(u),Oe.copy(e.target).add(t),e.object.lookAt(e.target),!0===e.enableDamping?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,x.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),x.set(0,0,0)),e.zoomToCursor&&B){let O=null;if(e.object.isPerspectiveCamera){const z=t.length();O=$(z*C);const Q=z-O;e.object.position.addScaledVector(re,Q),e.object.updateMatrixWorld(),F=!!Q}else if(e.object.isOrthographicCamera){const z=new s.Pa4(R.x,R.y,0);z.unproject(e.object);const Q=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/C)),e.object.updateProjectionMatrix(),F=Q!==e.object.zoom;const _e=new s.Pa4(R.x,R.y,0);_e.unproject(e.object),e.object.position.sub(_e).add(z),e.object.updateMatrixWorld(),O=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;null!==O&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(O).add(e.object.position):(G.origin.copy(e.object.position),G.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(G.direction))<ke?h.lookAt(e.target):(se.setFromNormalAndCoplanarPoint(e.object.up,e.target),G.intersectPlane(se,e.target))))}else if(e.object.isOrthographicCamera){const O=e.object.zoom;e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/C)),O!==e.object.zoom&&(e.object.updateProjectionMatrix(),F=!0)}return C=1,B=!1,!!(F||m.distanceToSquared(e.object.position)>l||8*(1-g.dot(e.object.quaternion))>l||A.distanceToSquared(e.target)>l)&&(e.dispatchEvent(ie),m.copy(e.object.position),g.copy(e.object.quaternion),A.copy(e.target),!0)}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Ee),e.domElement.removeEventListener("pointerdown",Me),e.domElement.removeEventListener("pointercancel",Y),e.domElement.removeEventListener("wheel",Pe),e.domElement.removeEventListener("pointermove",ee),e.domElement.removeEventListener("pointerup",Y),e.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),null!==e._domElementKeyEvents&&(e._domElementKeyEvents.removeEventListener("keydown",te),e._domElementKeyEvents=null)};const e=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const l=1e-6,d=new s.$V,p=new s.$V;let C=1;const x=new s.Pa4,M=new s.FM8,w=new s.FM8,v=new s.FM8,y=new s.FM8,k=new s.FM8,I=new s.FM8,N=new s.FM8,S=new s.FM8,j=new s.FM8,re=new s.Pa4,R=new s.FM8;let B=!1;const f=[],H={};let V=!1;function K(t){const a=Math.abs(.01*t);return Math.pow(.95,e.zoomSpeed*a)}function D(t){p.theta-=t}function X(t){p.phi-=t}const ce=function(){const t=new s.Pa4;return function(u,m){t.setFromMatrixColumn(m,0),t.multiplyScalar(-u),x.add(t)}}(),le=function(){const t=new s.Pa4;return function(u,m){!0===e.screenSpacePanning?t.setFromMatrixColumn(m,1):(t.setFromMatrixColumn(m,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(u),x.add(t)}}(),L=function(){const t=new s.Pa4;return function(u,m){const g=e.domElement;if(e.object.isPerspectiveCamera){t.copy(e.object.position).sub(e.target);let b=t.length();b*=Math.tan(e.object.fov/2*Math.PI/180),ce(2*u*b/g.clientHeight,e.object.matrix),le(2*m*b/g.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(ce(u*(e.object.right-e.object.left)/e.object.zoom/g.clientWidth,e.object.matrix),le(m*(e.object.top-e.object.bottom)/e.object.zoom/g.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function J(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?C/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function de(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?C*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function W(t,a){if(!e.zoomToCursor)return;B=!0;const u=e.domElement.getBoundingClientRect(),g=a-u.top,b=u.height;R.x=(t-u.left)/u.width*2-1,R.y=-g/b*2+1,re.set(R.x,R.y,1).unproject(e.object).sub(e.object.position).normalize()}function $(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ue(t){M.set(t.clientX,t.clientY)}function me(t){y.set(t.clientX,t.clientY)}function he(t){if(1===f.length)M.set(t.pageX,t.pageY);else{const a=Z(t);M.set(.5*(t.pageX+a.x),.5*(t.pageY+a.y))}}function pe(t){if(1===f.length)y.set(t.pageX,t.pageY);else{const a=Z(t);y.set(.5*(t.pageX+a.x),.5*(t.pageY+a.y))}}function fe(t){const a=Z(t),u=t.pageX-a.x,m=t.pageY-a.y,g=Math.sqrt(u*u+m*m);N.set(0,g)}function ge(t){if(1==f.length)w.set(t.pageX,t.pageY);else{const u=Z(t);w.set(.5*(t.pageX+u.x),.5*(t.pageY+u.y))}v.subVectors(w,M).multiplyScalar(e.rotateSpeed);const a=e.domElement;D(2*Math.PI*v.x/a.clientHeight),X(2*Math.PI*v.y/a.clientHeight),M.copy(w)}function ye(t){if(1===f.length)k.set(t.pageX,t.pageY);else{const a=Z(t);k.set(.5*(t.pageX+a.x),.5*(t.pageY+a.y))}I.subVectors(k,y).multiplyScalar(e.panSpeed),L(I.x,I.y),y.copy(k)}function be(t){const a=Z(t),u=t.pageX-a.x,m=t.pageY-a.y,g=Math.sqrt(u*u+m*m);S.set(0,g),j.set(0,Math.pow(S.y/N.y,e.zoomSpeed)),J(j.y),N.copy(S),W(.5*(t.pageX+a.x),.5*(t.pageY+a.y))}function Me(t){!1!==e.enabled&&(0===f.length&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",ee),e.domElement.addEventListener("pointerup",Y)),!function lt(t){for(let a=0;a<f.length;a++)if(f[a]==t.pointerId)return!0;return!1}(t)&&(function rt(t){f.push(t.pointerId)}(t),"touch"===t.pointerType?we(t):function nt(t){let a;switch(t.button){case 0:a=e.mouseButtons.LEFT;break;case 1:a=e.mouseButtons.MIDDLE;break;case 2:a=e.mouseButtons.RIGHT;break;default:a=-1}switch(a){case s.RsA.DOLLY:if(!1===e.enableZoom)return;(function Xe(t){W(t.clientX,t.clientX),N.set(t.clientX,t.clientY)})(t),r=i.DOLLY;break;case s.RsA.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===e.enablePan)return;me(t),r=i.PAN}else{if(!1===e.enableRotate)return;ue(t),r=i.ROTATE}break;case s.RsA.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===e.enableRotate)return;ue(t),r=i.ROTATE}else{if(!1===e.enablePan)return;me(t),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&e.dispatchEvent(q)}(t)))}function ee(t){!1!==e.enabled&&("touch"===t.pointerType?function st(t){switch(Te(t),r){case i.TOUCH_ROTATE:if(!1===e.enableRotate)return;ge(t),e.update();break;case i.TOUCH_PAN:if(!1===e.enablePan)return;ye(t),e.update();break;case i.TOUCH_DOLLY_PAN:if(!1===e.enableZoom&&!1===e.enablePan)return;(function tt(t){e.enableZoom&&be(t),e.enablePan&&ye(t)})(t),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===e.enableZoom&&!1===e.enableRotate)return;(function ot(t){e.enableZoom&&be(t),e.enableRotate&&ge(t)})(t),e.update();break;default:r=i.NONE}}(t):function it(t){switch(r){case i.ROTATE:if(!1===e.enableRotate)return;!function Qe(t){w.set(t.clientX,t.clientY),v.subVectors(w,M).multiplyScalar(e.rotateSpeed);const a=e.domElement;D(2*Math.PI*v.x/a.clientHeight),X(2*Math.PI*v.y/a.clientHeight),M.copy(w),e.update()}(t);break;case i.DOLLY:if(!1===e.enableZoom)return;!function qe(t){S.set(t.clientX,t.clientY),j.subVectors(S,N),j.y>0?J(K(j.y)):j.y<0&&de(K(j.y)),N.copy(S),e.update()}(t);break;case i.PAN:if(!1===e.enablePan)return;!function Ve(t){k.set(t.clientX,t.clientY),I.subVectors(k,y).multiplyScalar(e.panSpeed),L(I.x,I.y),y.copy(k),e.update()}(t)}}(t))}function Y(t){switch(function ct(t){delete H[t.pointerId];for(let a=0;a<f.length;a++)if(f[a]==t.pointerId)return void f.splice(a,1)}(t),f.length){case 0:e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",ee),e.domElement.removeEventListener("pointerup",Y),e.dispatchEvent(ae),r=i.NONE;break;case 1:const a=f[0],u=H[a];we({pointerId:a,pageX:u.x,pageY:u.y})}}function Pe(t){!1===e.enabled||!1===e.enableZoom||r!==i.NONE||(t.preventDefault(),e.dispatchEvent(q),function Je(t){W(t.clientX,t.clientY),t.deltaY<0?de(K(t.deltaY)):t.deltaY>0&&J(K(t.deltaY)),e.update()}(function at(t){const u={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(t.deltaMode){case 1:u.deltaY*=16;break;case 2:u.deltaY*=100}return t.ctrlKey&&!V&&(u.deltaY*=10),u}(t)),e.dispatchEvent(ae))}function Ce(t){"Control"===t.key&&(V=!0,e.domElement.getRootNode().addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(t){"Control"===t.key&&(V=!1,e.domElement.getRootNode().removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function te(t){!1===e.enabled||!1===e.enablePan||function We(t){let a=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?X(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(0,e.keyPanSpeed),a=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?X(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(0,-e.keyPanSpeed),a=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?D(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(e.keyPanSpeed,0),a=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?D(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(-e.keyPanSpeed,0),a=!0}a&&(t.preventDefault(),e.update())}(t)}function we(t){switch(Te(t),f.length){case 1:switch(e.touches.ONE){case s.QmN.ROTATE:if(!1===e.enableRotate)return;he(t),r=i.TOUCH_ROTATE;break;case s.QmN.PAN:if(!1===e.enablePan)return;pe(t),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(e.touches.TWO){case s.QmN.DOLLY_PAN:if(!1===e.enableZoom&&!1===e.enablePan)return;(function $e(t){e.enableZoom&&fe(t),e.enablePan&&pe(t)})(t),r=i.TOUCH_DOLLY_PAN;break;case s.QmN.DOLLY_ROTATE:if(!1===e.enableZoom&&!1===e.enableRotate)return;(function et(t){e.enableZoom&&fe(t),e.enableRotate&&he(t)})(t),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&e.dispatchEvent(q)}function Ee(t){!1!==e.enabled&&t.preventDefault()}function Te(t){let a=H[t.pointerId];void 0===a&&(a=new s.FM8,H[t.pointerId]=a),a.set(t.pageX,t.pageY)}function Z(t){return H[t.pointerId===f[0]?f[1]:f[0]]}e.domElement.addEventListener("contextmenu",Ee),e.domElement.addEventListener("pointerdown",Me),e.domElement.addEventListener("pointercancel",Y),e.domElement.addEventListener("wheel",Pe,{passive:!1}),e.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}var Ie=P(6588);const Ne=["canvas"];let Se=(()=>{class c{constructor(o){this.modelService=o,this.scene=new s.xsS,this.objectMovement=new n.vpe,this.defaultMaterials=new Map,this.isMoving=!1}ngAfterViewInit(){this.initializeScene(),this.loadModels(),this.setupControls(),this.renderLoop()}initializeScene(){const o=this.canvasRef.nativeElement;this.camera=new s.cPb(50,o.clientWidth/o.clientHeight,.1,1e3),this.camera.position.set(0,2,15),this.renderer=new s.CP7({canvas:o,antialias:!0,alpha:!0}),this.renderer.setSize(o.clientWidth,o.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.scene.add(new s.Mig(11053224,5));const e=new s.Ox3(11053224,5);e.position.set(-8,3,5),this.scene.add(e)}loadModels(){this.modelService.loadModel().then(o=>{o.scale.set(3.9,3.9,3.9),o.position.set(.5,-3,0),o.rotation.set(0,5.5,0),this.horseModel=o}).catch(o=>console.error("Failed to load the horse model:",o))}addCircles(){const o=new s.b_z(.04,.2,8),e=new s.vBJ({color:16777215,transparent:!0,opacity:.5}),d=new s.ZAu,p=C=>{for(let x=0;x<50;x++){const M=x/50*Math.PI*2,w=C*Math.cos(M),v=C*Math.sin(M),y=new s.Kj0(o,e);y.position.set(w,v,0),y.rotation.z=M,y.rotation.x=Math.PI/2,d.add(y)}};p(4.2),p(3.8),d.position.set(.5,-3,0),d.rotation.x=-Math.PI/2,this.scene.add(d)}displayHorseModel(){this.horseModel&&(this.scene.add(this.horseModel),this.addCircles(),this.createParticleSystem())}highlightMesh(o){this.highlightedObject!==o&&(this.highlightedObject&&this.resetMeshMaterial(this.highlightedObject),this.defaultMaterials.has(o)||this.defaultMaterials.set(o,this.getMeshMaterials(o)),this.highlightedObject=o,this.applyHighlightMaterial(o))}getMeshMaterials(o){return Array.isArray(o.material)?[...o.material]:[o.material.clone()]}applyHighlightMaterial(o){(Array.isArray(o.material)?o.material:[o.material]).forEach(i=>{i.opacity=0,i.transparent=!0})}resetMeshMaterial(o){const e=Array.isArray(o.material)?o.material:[o.material],i=this.defaultMaterials.get(o);i&&(e.forEach((r,l)=>{l<i.length&&r.copy(i[l])}),this.defaultMaterials.delete(o))}showMusselsByName(o){if(!this.horseModel)return void console.error("Horse model is not loaded yet.");const e=this.findMeshByName(this.horseModel,o),i=this.findMeshByName(this.horseModel,"skin");e?this.highlightMesh(e):this.resetHighlightedObject(),i&&this.fadeOutMesh(i)}findMeshByName(o,e){let i;return o.traverse(r=>{r instanceof s.Kj0&&r.name===e&&(i=r)}),i}resetHighlightedObject(){this.highlightedObject&&(this.resetMeshMaterial(this.highlightedObject),this.highlightedObject=void 0)}fadeOutMesh(o){const i=()=>{const r=o.material;r.opacity>0?(r.opacity=Math.max(0,r.opacity-.05),r.transparent=!0,requestAnimationFrame(i)):o.visible=!1};i()}setupControls(){this.controls=new je(this.camera,this.renderer.domElement),this.controls.target.set(0,2,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.enableZoom=!0,this.controls.maxPolarAngle=Math.PI/2,this.controls.minAzimuthAngle=-1/0,this.controls.maxAzimuthAngle=1/0,this.controls.minDistance=10,this.controls.maxDistance=30,this.controls.addEventListener("change",()=>{this.onObjectMoved()})}onObjectMoved(){!this.isMoving&&this.horseModel&&(this.isMoving=!0,this.objectMovement.emit(!0)),clearTimeout(this.movementTimeout),this.movementTimeout=setTimeout(()=>{this.isMoving=!1,this.objectMovement.emit(!1)},200)}renderLoop(){const o=()=>{requestAnimationFrame(o),this.controls.update(),this.updateParticles(),this.renderer.render(this.scene,this.camera)};o()}createParticleSystem(){const e=new s.u9r,i=new Float32Array(3e3);this.velocities=new Float32Array(3e3),this.initializeParticles(i,this.velocities,1e3),e.setAttribute("position",new s.TlE(i,3)),e.setAttribute("velocity",new s.TlE(this.velocities,3));const l=(new s.dpR).load("./assets/images/glow.png"),d=new s.UY4({map:l,color:16777215,size:1,opacity:.8,transparent:!0,blending:s.WMw}),p=new s.woe(e,d);this.scene.add(p)}initializeParticles(o,e,i){for(let r=0;r<3*i;r++)o[r]=200*Math.random()-100,e[r]=.02*Math.random()-.01}updateParticles(){this.scene.traverse(e=>{if(e instanceof s.woe){const i=e.geometry;this.moveParticles(i.attributes.position.array,i.attributes.velocity.array,1.2),i.attributes.position.needsUpdate=!0}})}moveParticles(o,e,i){for(let l=0;l<o.length;l+=3)o[l]+=e[l]*i,o[l+1]+=e[l+1]*i,o[l+2]+=e[l+2]*i,o[l+1]<-100&&(o[l+1]=100)}}return c.\u0275fac=function(o){return new(o||c)(n.Y36(Ie.b))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-model"]],viewQuery:function(o,e){if(1&o&&n.Gf(Ne,5),2&o){let i;n.iGM(i=n.CRH())&&(e.canvasRef=i.first)}},outputs:{objectMovement:"objectMovement"},decls:2,vars:0,consts:[["id","canvas"],["canvas",""]],template:function(o,e){1&o&&n._UZ(0,"canvas",0,1)},styles:["canvas[_ngcontent-%COMP%]{width:100vw;height:100vh;display:block}"]}),c})();const Le=["modalComponent"],Ze=["circle"];function He(c,h){1&c&&n._UZ(0,"div",27)}function De(c,h){if(1&c){const o=n.EpF();n.TgZ(0,"div",28),n.NdJ("mouseenter",function(){const i=n.CHM(o),r=i.$implicit,l=i.index,d=n.oxw();return n.KtG(d.handleButtonClick(r.param,r.link,l))})("mouseleave",function(){const r=n.CHM(o).$implicit,l=n.oxw();return n.KtG(l.handleButtonClick("empty",r.link))})("click",function(){n.CHM(o);const i=n.oxw();return n.KtG(i.openPopup())}),n._UZ(1,"img",29),n.TgZ(2,"span",30),n._uU(3),n.qZA()()}if(2&c){const o=h.$implicit,e=n.oxw();n.Q6J("ngClass",e.getLeftItemClass(o.position))("@fadeInOut",void 0),n.xp6(1),n.Q6J("src","assets/images/"+o.image,n.LSH),n.xp6(2),n.hij(" ",e.truncateText(o.text),"")}}function Ye(c,h){if(1&c){const o=n.EpF();n.TgZ(0,"div",31),n.NdJ("click",function(){const r=n.CHM(o).$implicit,l=n.oxw();return n.KtG(l.handleButtonClick(r.param,r.link))}),n._UZ(1,"img",29),n.TgZ(2,"span"),n._uU(3),n.qZA()()}if(2&c){const o=h.$implicit,e=n.oxw();n.Q6J("ngClass",e.getRightItemClass(o.position))("@fadeInOut",void 0),n.xp6(1),n.Q6J("src","assets/images/"+o.image,n.LSH),n.xp6(2),n.Oqu(o.text)}}function Fe(c,h){1&c&&(n.O4$(),n._UZ(0,"circle",32,33)),2&c&&n.Q6J("@fadeInOut",void 0)}function ze(c,h){if(1&c&&(n.O4$(),n.TgZ(0,"circle",34),n._UZ(1,"animate",35)(2,"animate",36),n.qZA()),2&c){const o=n.oxw();n.uIk("r",o.baseRadius+80),n.xp6(1),n.uIk("from",o.animatedRadius)("to",o.animatedRadius+200)}}function Ue(c,h){if(1&c&&(n.O4$(),n.TgZ(0,"circle",37),n._UZ(1,"animate",35)(2,"animate",36),n.qZA()),2&c){const o=n.oxw();n.uIk("r",o.baseRadius+80),n.xp6(1),n.uIk("from",o.animatedRadius+500)("to",o.animatedRadius+200)}}let Ge=(()=>{class c{constructor(o,e,i){this.loaderService=o,this.router=e,this.modalService=i,this.circleComplete=!1,this.displayButton=!1,this.pulasEffect=!1,this.modalMovement=!0,this.animatedRadius=250,this.baseRadius=250,this.circleRadius=0,this.textEffect=!0,this.leftItems=[{position:"first",text:"Scheduled Care Program for Optimal Tissue Healing and Pain Modulation",image:"question.svg",param:"empty",link:!1},{position:"second",text:"Ventral Spondylosis",image:"question.svg",param:"Horse_body_neck",link:!1},{position:"third",text:"Cervical Osteoarthritis",image:"question.svg",param:"Horse_Body_back",link:!1},{position:"fourth",text:"Sacroiliac Dysfunction",image:"question.svg",param:"Horse_body_leg",link:!1}],this.rightItems=[{position:"first",text:"Clinical Evidence",image:"extra.svg",param:"/clinical-evidence",link:!0},{position:"second",text:"White Papers",image:"description.svg",param:"/science",link:!0},{position:"third",text:"Success Stories",image:"extra.svg",param:"/success-stories",link:!0},{position:"fourth",text:"Wait list",image:"call.svg",param:"/contact",link:!0}]}ngOnInit(){}ngAfterViewInit(){this.circleRef&&this.animateCircle()}animateCircle(){const o=Math.min(window.innerWidth,window.innerHeight)/1.8;this.circleRadius=o,this.updateButtonPositions(),this.baseRadius=Math.round(.1*o),this.animatedRadius=Math.round(.9*o)+30,this.updateCircleRadius(250,20,o)}setSvgCircleRadius(o){this.circleRef.nativeElement.setAttribute("r",o.toString())}updateCircleRadius(o,e,i){o<i?(this.setSvgCircleRadius(o),setTimeout(()=>{this.updateCircleRadius(o+1,Math.max(e-.5,1),i)},e)):(this.circleComplete=!0,this.pulasEffect=!0,this.displayButton=!0,this.modalComponent.displayHorseModel())}updateButtonPositions(){const o=document.querySelectorAll(".left-circle .menu-item"),e=document.querySelectorAll(".right-circle .menu-item"),i=[{top:26,left:this.circleRadius-30},{top:38,left:this.circleRadius-56},{top:50,left:this.circleRadius-62},{top:62,left:this.circleRadius-50}],r=[{top:29,right:this.circleRadius-40},{top:38,right:this.circleRadius-56},{top:47,right:this.circleRadius-60},{top:57,right:this.circleRadius-58}];o.forEach((l,d)=>{const p=i[d];l.style.top=`${p.top}vh`,l.style.left=`${p.left}px`}),e.forEach((l,d)=>{const p=r[d];l.style.top=`${p.top}vh`,l.style.right=`${p.right}px`})}truncateText(o){return this.textEffect&&o.length>25?o.slice(0,22):o}handleButtonClick(o,e,i){e?this.router.navigate([o]):(this.textEffect="empty"!=o||0!=i,this.modalComponent.showMusselsByName(o))}modalRotation(o){this.circleComplete&&(o?(this.modalMovement=!o,this.displayButton=!o,this.pulasEffect=!o,this.modalMovement=!o):(this.modalMovement=!o,this.displayButton=!o,this.pulasEffect=!o,setTimeout(()=>{this.setSvgCircleRadius(this.circleRadius)},500)))}getLeftItemClass(o){return`left-${o}`}getRightItemClass(o){return`right-${o}`}openPopup(){this.modalService.open(ve,{ariaLabelledBy:"modal-basic-title",centered:!0,size:"lg"})}}return c.\u0275fac=function(o){return new(o||c)(n.Y36(Re.D),n.Y36(ne.F0),n.Y36(Ae.FF))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-home"]],viewQuery:function(o,e){if(1&o&&(n.Gf(Le,5),n.Gf(Ze,5)),2&o){let i;n.iGM(i=n.CRH())&&(e.modalComponent=i.first),n.iGM(i=n.CRH())&&(e.circleRef=i.first)}},decls:34,vars:8,consts:[["class","background-shades",4,"ngIf"],[1,"container-home"],[1,"left-circle",3,"hidden"],["class","menu-item",3,"ngClass","mouseenter","mouseleave","click",4,"ngFor","ngForOf"],[1,"right-circle",3,"hidden"],["class","menu-item",3,"ngClass","click",4,"ngFor","ngForOf"],["id","nitin","height","100%","width","100%"],["id","orangeGradient","x1","0%","y1","0%","x2","100%"],["offset","0%",2,"stop-color","#ff8927","stop-opacity","1"],["offset","50%",2,"stop-color","#201200","stop-opacity","0"],["offset","100%",2,"stop-color","#ff8927","stop-opacity","1"],["id","orangeGradientPulse","x1","0%","y1","0%","x2","100%","y2","0%"],["offset","0%",2,"stop-color","#af550b0b","stop-opacity","1"],["offset","50%",2,"stop-color","#d078051a","stop-opacity","0"],["offset","100%",2,"stop-color","#af550b0b","stop-opacity","1"],["id","strongGlow","x","-50%","y","-50%","width","200%","height","200%"],["in","SourceGraphic","stdDeviation","20","result","coloredBlur"],["in","coloredBlur"],["in","SourceGraphic"],["id","glow","x","-50%","y","-50%","width","200%","height","200%"],["cx","50%","cy","50%","r","250","stroke","url(#orangeGradient)","stroke-width","4","fill","#8685852c","filter","url(#glow)",4,"ngIf"],["cx","50%","cy","50%","stroke","url(#orangeGradientPulse)","stroke-width","40","fill","transparent","filter","url(#orangeGradientPulse)",4,"ngIf"],["cx","50%","cy","50%","stroke","url(#orangeGradientPulse)","stroke-width","35","fill","transparent","filter","url(#orangeGradientPulse)",4,"ngIf"],["x","0","y","0","width","100%","height","100%"],[1,"canvas-container"],[3,"objectMovement"],["modalComponent",""],[1,"background-shades"],[1,"menu-item",3,"ngClass","mouseenter","mouseleave","click"],[3,"src"],[2,"text-align","end"],[1,"menu-item",3,"ngClass","click"],["cx","50%","cy","50%","r","250","stroke","url(#orangeGradient)","stroke-width","4","fill","#8685852c","filter","url(#glow)"],["circle",""],["cx","50%","cy","50%","stroke","url(#orangeGradientPulse)","stroke-width","40","fill","transparent","filter","url(#orangeGradientPulse)"],["attributeName","r","dur","2s","begin","0s","repeatCount","indefinite"],["attributeName","opacity","from","1","to","0","dur","2s","begin","0s","repeatCount","indefinite"],["cx","50%","cy","50%","stroke","url(#orangeGradientPulse)","stroke-width","35","fill","transparent","filter","url(#orangeGradientPulse)"]],template:function(o,e){1&o&&(n.YNc(0,He,1,0,"div",0),n.TgZ(1,"div",1)(2,"div",2),n.YNc(3,De,4,4,"div",3),n.qZA(),n.TgZ(4,"div",4),n.YNc(5,Ye,4,4,"div",5),n.qZA(),n.O4$(),n.TgZ(6,"svg",6)(7,"defs")(8,"linearGradient",7),n._UZ(9,"stop",8)(10,"stop",9)(11,"stop",10),n.qZA(),n.TgZ(12,"linearGradient",11),n._UZ(13,"stop",12)(14,"stop",13)(15,"stop",14),n.qZA(),n.TgZ(16,"filter",15),n._UZ(17,"feGaussianBlur",16),n.TgZ(18,"feMerge"),n._UZ(19,"feMergeNode",17)(20,"feMergeNode",18),n.qZA()(),n.TgZ(21,"filter",19),n._UZ(22,"feGaussianBlur",16),n.TgZ(23,"feMerge"),n._UZ(24,"feMergeNode",17)(25,"feMergeNode",18),n.qZA()()(),n.YNc(26,Fe,2,1,"circle",20),n.YNc(27,ze,3,3,"circle",21),n.YNc(28,Ue,3,3,"circle",22),n.TgZ(29,"foreignObject",23),n.kcU(),n.TgZ(30,"div",24)(31,"app-model",25,26),n.NdJ("objectMovement",function(r){return e.modalRotation(r)}),n.qZA()()(),n._uU(33," Sorry, your browser does not support inline SVG. "),n.qZA()()),2&o&&(n.Q6J("ngIf",e.circleComplete),n.xp6(2),n.Q6J("hidden",!e.displayButton),n.xp6(1),n.Q6J("ngForOf",e.leftItems),n.xp6(1),n.Q6J("hidden",!e.displayButton),n.xp6(1),n.Q6J("ngForOf",e.rightItems),n.xp6(21),n.Q6J("ngIf",e.modalMovement),n.xp6(1),n.Q6J("ngIf",e.pulasEffect),n.xp6(1),n.Q6J("ngIf",e.pulasEffect))},dependencies:[U.mk,U.sg,U.O5,Se],styles:[".container-home[_ngcontent-%COMP%]{position:relative;height:100vh;overflow:hidden}.container-home[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.container-home[_ngcontent-%COMP%]   .canvas-container[_ngcontent-%COMP%]{width:100%;height:100%}.menu-item[_ngcontent-%COMP%]{position:absolute;width:42px;height:38px;background-color:#2c2c2c;border-radius:50%;display:flex;justify-content:center;align-items:center;border:2px solid #ff8927;color:#c1c1c1;z-index:2;transition:box-shadow .3s ease-in-out,color .3s ease-in-out}.menu-item[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px 4px #ff8927;color:#fff}.menu-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;position:absolute;width:250px}.left-circle[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{left:-15%;transform:translate(-100%)}.right-circle[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:translate(65%)}"],data:{animation:[(0,_.X$)("fadeInOut",[(0,_.eR)(":enter",[(0,_.oB)({opacity:0}),(0,_.jt)("0.6s",(0,_.oB)({opacity:1}))]),(0,_.eR)(":leave",[(0,_.jt)("0.6s",(0,_.oB)({opacity:0}))])])]}}),c})(),Be=(()=>{class c{}return c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=n.oAB({type:c}),c.\u0275inj=n.cJS({imports:[U.ez,ne.Bz.forChild([{path:"",component:Ge}])]}),c})()}}]);