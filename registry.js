// Тізім — мекенжайлар туралы бұрынғы ресми материалдарға сүйенген анықтамалық.
// Бұл жазбалардың барлығы картада геокодталмаған; нүктелерді ойдан қоспаймыз.
(()=>{const root=document.getElementById('officialRegister');if(!root)return;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
root.innerHTML='<h4>Оқу ғимараттары (6)</h4>'+campusTypes.map(x=>`<p><b>${escape(x.name)}</b><br>${escape(x.features)}<br><small>${escape(x.faculties)}</small></p>`).join('')+'<h4>Студенттік үйлер және серіктестер (10)</h4>'+dormRegistry.map(x=>`<p><b>${escape(x[0])}</b><br><small>${escape(x[1])}</small></p>`).join('')+'<p><small>Ескерту: 14 карта нүктесінің координаттары бұрынғы QGIS жобасынан алынған; №6 ғимарат және тізімдегі кейбір студенттік үйлер картада әлі жоқ. Жатақханалар тізімі 2026–2027 орналастыру ақпаратына негізделген.</small></p>';
})();
