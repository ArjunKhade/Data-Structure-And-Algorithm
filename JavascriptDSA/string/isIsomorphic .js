//Two strings s and t are isomorphic if the characters in s can be replaced to get t.
let s = "egg";
let t = "add";

console.log(isIsomorphic(s, t));

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
}
