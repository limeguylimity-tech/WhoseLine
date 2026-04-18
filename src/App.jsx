import { useState, useCallback } from "react";
export default function App() {
const ALL_LINES = [
  "Bad last words",
  "Bad things to shout during a moment of silence",
  "Bad things to engrave on a wedding ring",
  "Bad things to put in a sympathy card",
  "Bad things to say on your first day as a surgeon",
  "Bad things to say to a judge right before sentencing",
  "Bad things to say to a cop who just pulled you over",
  "Bad things to say to your boss when they announce layoffs",
  "Bad things to text your boss by accident",
  "Bad things to whisper during a first kiss",
  "Bad things to include in a wedding toast",
  "Bad things to announce over a school intercom",
  "Bad things to say to someone right before they go on stage",
  "Bad things to say when someone asks if their outfit looks okay",
  "Bad things to overhear at a dentist office",
  "Bad things to say after someone shows you their newborn baby",
  "Bad things to say to someone having a midlife crisis",
  "Bad things to say at a job interview for a kindergarten teacher",
  "Bad things to say to a couples therapist",
  "Bad things to say at a job interview when you really need the job",
  "Bad things to say at a baby shower when you don't like the name",
  "Bad things to hear from the person doing your taxes",
  "Bad things to say to your boss after a fire drill",
  "Bad things to say during a job shadow at a funeral home",
  "Bad things to say to someone who just got out of prison",
  "Bad things to say to a fortune teller",
  "Bad ways to end a prayer",
  "Bad ways to win an argument with your spouse",
  "Bad ways to tell someone their fly is down",
  "Bad ways to introduce yourself at a job interview",
  "Bad ways to accept a marriage proposal",
  "Bad ways to break up with someone",
  "Bad ways to propose marriage",
  "Bad ways to start a speech",
  "Bad ways to resign from a job",
  "Bad ways to fire someone",
  "Bad ways to call in sick",
  "Bad ways to ask for a raise",
  "Bad campaign slogans",
  "Bad inspirational quotes",
  "Bad motivational posters",
  "Bad last minute Halloween costumes",
  "Bad pickup lines at a funeral",
  "Bad pick-up lines that only work in space",
  "Bad names for a strip club",
  "Bad names for a retirement home",
  "Bad names for a baby",
  "Bad names for a church",
  "Bad names for a funeral home",
  "Bad names for a political campaign",
  "Bad names for a children's TV show",
  "Bad names for a band",
  "Bad names for a dog",
  "Bad names for a dating app",
  "Bad names for a cologne",
  "Bad names for a medical procedure",
  "Bad slogans for a hospital",
  "Bad slogans for a divorce lawyer",
  "Bad ideas for a school fundraiser",
  "Bad ideas for a company team building exercise",
  "Bad advice to give a teenager",
  "Bad advice from a fortune cookie",
  "Bad things to say on a job application under hobbies",
  "Bad titles for a memoir",
  "Bad things to put on a Valentine's Day card",
  "Rejected slogans for the US Army",
  "Rejected slogans for fast food chains",
  "Rejected slogans for a gym",
  "Rejected slogans for a marriage counselor",
  "Rejected slogans for a dentist office",
  "Rejected slogans for a police department",
  "Rejected slogans for a grocery store",
  "Rejected names for a superhero",
  "Rejected names for a spy movie",
  "Rejected names for a romantic movie",
  "Rejected names for a pharmaceutical drug",
  "Rejected names for a law firm",
  "Rejected names for a baby",
  "Rejected names for a hospital",
  "Rejected titles for self-help books",
  "Rejected titles for a romantic comedy",
  "Rejected ideas for a school mascot",
  "Rejected ideas for a breakfast cereal",
  "Rejected ideas for an Olympic sport",
  "Rejected ideas for a reality TV show",
  "Unlikely things to hear from a priest",
  "Unlikely things to hear from Santa Claus",
  "Unlikely things to hear from a dentist",
  "Unlikely things to hear from a kindergarten teacher",
  "Unlikely things to hear from a lifeguard",
  "Unlikely things to hear from a yoga instructor",
  "Unlikely things to hear from a firefighter",
  "Unlikely things to hear from a pilot mid-flight",
  "Unlikely things to hear from mission control",
  "Unlikely things to hear at a nudist colony",
  "Unlikely things to hear from a wedding officiant",
  "Unlikely things to hear from your GPS",
  "Unlikely things to hear from your doctor right before surgery",
  "Unlikely things to hear from your dentist mid-procedure",
  "Unlikely things to hear from your therapist",
  "Unlikely things to hear from your financial advisor when the market crashes",
  "Unlikely things to hear from the tooth fairy",
  "Unlikely things to hear from a zombie",
  "Unlikely things to hear from a genie",
  "Unlikely things to hear from a scarecrow",
  "Unlikely things to hear from a ship captain as it sinks",
  "Unlikely things to hear from a fortune cookie",
  "Unlikely things to hear from a driving instructor on day one",
  "Unlikely things to hear from a personal trainer who hates their job",
  "Unlikely things to hear from a mall Santa",
  "Unlikely things to hear from a flight attendant mid-turbulence",
  "Unlikely things to hear from an ATM",
  "Unlikely things to hear from your shadow",
  "Unlikely things to hear from your conscience",
  "Unlikely things to hear on a nature documentary about humans",
  "Unlikely things to hear from a valet who dented your car",
  "Unlikely things to hear from a cemetery groundskeeper on Halloween",
  "Unlikely things to say when someone asks you to be a pallbearer",
  "Unlikely things to say when someone gives birth",
  "Unlikely things to say at your own wedding",
  "Unlikely things to say to a ghost",
  "Unlikely things to say to your parole officer",
  "Unlikely things to say after winning an Oscar",
  "Unlikely things to say at a job interview for Santa Claus",
  "Unlikely things to say when breaking up with someone",
  "Unlikely things to overhear in a confessional",
  "Unlikely things to hear at a gun range safety briefing",
  "Unlikely lines from a children's book",
  "Unlikely lines from a children's pop-up book",
  "Unlikely lines from a Hallmark Christmas movie",
  "Unlikely lines from a nature documentary",
  "Unlikely lines from a self-help book",
  "Unlikely lines from a marriage vow",
  "Unlikely lines from a motivational speaker who has given up",
  "Unlikely lines from a presidential inauguration speech",
  "Unlikely lines from a therapist who needs therapy",
  "Unlikely lines from a superhero origin story that didn't make the cut",
  "Unlikely lines from a spy who is also a terrible liar",
  "Unlikely lines from a pirate who just discovered the internet",
  "Unlikely lines from a book on positive thinking by a very negative person",
  "Unlikely lines from a fortune teller who only sees bad things",
  "Unlikely lines from a divorce lawyer's voicemail",
  "Unlikely lines from a self-checkout machine having an existential crisis",
  "Unlikely dialogue from a Disney villain",
  "Unlikely dialogue from a robot learning about love",
  "Things you shouldn't say during surgery",
  "Things you shouldn't say at a wedding",
  "Things you shouldn't say at a funeral",
  "Things you shouldn't say to your therapist",
  "Things you shouldn't say during a eulogy",
  "Things you shouldn't say while skydiving",
  "Things you shouldn't say while skydiving tandem",
  "Things you shouldn't say at your own intervention",
  "Things you shouldn't say at your own surprise party",
  "Things you shouldn't say when meeting the president",
  "Things you shouldn't say when someone asks you to hold their baby",
  "Things you shouldn't say to someone who just got a haircut you hate",
  "Things you shouldn't say while someone is getting a tattoo of your face",
  "Things you shouldn't say during a performance review if you want a raise",
  "Things you shouldn't say during a job interview that is going badly",
  "Things you shouldn't say to a new coworker on their first day",
  "Things you shouldn't say on your wedding day",
  "Things you shouldn't say on a first date",
  "Things you shouldn't say at a first date dinner",
  "Things you shouldn't say when someone tells you they are pregnant",
  "Things you shouldn't say when someone shows you their newborn baby",
  "Things you shouldn't say when someone proposes to you",
  "Things you shouldn't say when meeting your partner's parents for the first time",
  "Things you shouldn't say when someone names their kid something unusual",
  "Things you shouldn't say when someone announces a divorce",
  "Things you shouldn't say at a gender reveal when you already knew",
  "Things that would ruin a marriage proposal",
  "Things that would be wrong to say at a baptism",
  "Things you should never say to a police dog",
  "What the voices in Drew Carey's head are saying",
  "Unlikely personal ads",
  "Bad things to say at a job interview for a therapist",
  "Things you shouldn't say when you forgot your anniversary"
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function playBuzzer() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.7, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

function speakLine(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.92;
  u.pitch = 1;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

export default function App() {
  const [remaining, setRemaining] = useState(() => shuffle(ALL_LINES));
  const [picked, setPicked] = useState(0);
  const [currentLine, setCurrentLine] = useState("");
  const [hasLine, setHasLine] = useState(false);
  const [log, setLog] = useState([]);
  const [done, setDone] = useState(false);

  const pull = useCallback(() => {
    if (remaining.length === 0) return;
    const next = [...remaining];
    const line = next.pop();
    setRemaining(next);
    setPicked(p => p + 1);
    setLog(l => [line, ...l]);
    setHasLine(false);
    setTimeout(() => {
      setCurrentLine(line);
      setHasLine(true);
      speakLine(line);
    }, 60);
    if (next.length === 0) setDone(true);
  }, [remaining]);

  const reset = useCallback(() => {
    setRemaining(shuffle(ALL_LINES));
    setPicked(0);
    setCurrentLine("");
    setHasLine(false);
    setLog([]);
    setDone(false);
  }, []);

  const pct = (picked / ALL_LINES.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#f0eee8",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem 4rem",
    }}>
      <div style={{ width: "100%", maxWidth: 660, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            color: "#f5c842",
            textShadow: "4px 4px 0 rgba(232,68,90,0.4)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}>Scenes From a Hat</div>
          <div style={{ fontSize: "0.75rem", color: "#555560", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.4rem" }}>
            Whose Line Is It Anyway? — Game Night Edition
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          {[["Remaining", remaining.length], ["Picked", picked], ["Total", ALL_LINES.length]].map(([label, val]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Arial Black', Impact, sans-serif", fontSize: "2rem", color: "#f5c842", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555560", marginTop: "0.2rem" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ width: "100%", height: 4, background: "#222230", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg,#e8445a,#f5c842)", borderRadius: 99, transition: "width 0.5s ease" }} />
        </div>

        {/* Card */}
        <div style={{
          width: "100%",
          background: "#13131a",
          border: hasLine ? "1px solid rgba(245,200,66,0.25)" : "1px solid #222230",
          borderRadius: 16,
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s",
        }}>
          {hasLine && (
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#e8445a,#f5c842)" }} />
          )}
          {hasLine ? (
            <>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5c842", marginBottom: "1rem" }}>SCENES FROM A HAT</div>
              <div style={{
                fontFamily: "'Arial Black', Impact, sans-serif",
                fontSize: "clamp(1.3rem, 4vw, 2.2rem)",
import { useState, useCallback } from "react";

const ALL_LINES = [
  "Bad last words",
  "Bad things to shout during a moment of silence",
  "Bad things to engrave on a wedding ring",
  "Bad things to put in a sympathy card",
  "Bad things to say on your first day as a surgeon",
  "Bad things to say to a judge right before sentencing",
  "Bad things to say to a cop who just pulled you over",
  "Bad things to say to your boss when they announce layoffs",
  "Bad things to text your boss by accident",
  "Bad things to whisper during a first kiss",
  "Bad things to include in a wedding toast",
  "Bad things to announce over a school intercom",
  "Bad things to say to someone right before they go on stage",
  "Bad things to say when someone asks if their outfit looks okay",
  "Bad things to overhear at a dentist office",
  "Bad things to say after someone shows you their newborn baby",
  "Bad things to say to someone having a midlife crisis",
  "Bad things to say at a job interview for a kindergarten teacher",
  "Bad things to say to a couples therapist",
  "Bad things to say at a job interview when you really need the job",
  "Bad things to say at a baby shower when you don't like the name",
  "Bad things to hear from the person doing your taxes",
  "Bad things to say to your boss after a fire drill",
  "Bad things to say during a job shadow at a funeral home",
  "Bad things to say to someone who just got out of prison",
  "Bad things to say to a fortune teller",
  "Bad ways to end a prayer",
  "Bad ways to win an argument with your spouse",
  "Bad ways to tell someone their fly is down",
  "Bad ways to introduce yourself at a job interview",
  "Bad ways to accept a marriage proposal",
  "Bad ways to break up with someone",
  "Bad ways to propose marriage",
  "Bad ways to start a speech",
  "Bad ways to resign from a job",
  "Bad ways to fire someone",
  "Bad ways to call in sick",
  "Bad ways to ask for a raise",
  "Bad campaign slogans",
  "Bad inspirational quotes",
  "Bad motivational posters",
  "Bad last minute Halloween costumes",
  "Bad pickup lines at a funeral",
  "Bad pick-up lines that only work in space",
  "Bad names for a strip club",
  "Bad names for a retirement home",
  "Bad names for a baby",
  "Bad names for a church",
  "Bad names for a funeral home",
  "Bad names for a political campaign",
  "Bad names for a children's TV show",
  "Bad names for a band",
  "Bad names for a dog",
  "Bad names for a dating app",
  "Bad names for a cologne",
  "Bad names for a medical procedure",
  "Bad slogans for a hospital",
  "Bad slogans for a divorce lawyer",
  "Bad ideas for a school fundraiser",
  "Bad ideas for a company team building exercise",
  "Bad advice to give a teenager",
  "Bad advice from a fortune cookie",
  "Bad things to say on a job application under hobbies",
  "Bad titles for a memoir",
  "Bad things to put on a Valentine's Day card",
  "Rejected slogans for the US Army",
  "Rejected slogans for fast food chains",
  "Rejected slogans for a gym",
  "Rejected slogans for a marriage counselor",
  "Rejected slogans for a dentist office",
  "Rejected slogans for a police department",
  "Rejected slogans for a grocery store",
  "Rejected names for a superhero",
  "Rejected names for a spy movie",
  "Rejected names for a romantic movie",
  "Rejected names for a pharmaceutical drug",
  "Rejected names for a law firm",
  "Rejected names for a baby",
  "Rejected names for a hospital",
  "Rejected titles for self-help books",
  "Rejected titles for a romantic comedy",
  "Rejected ideas for a school mascot",
  "Rejected ideas for a breakfast cereal",
  "Rejected ideas for an Olympic sport",
  "Rejected ideas for a reality TV show",
  "Unlikely things to hear from a priest",
  "Unlikely things to hear from Santa Claus",
  "Unlikely things to hear from a dentist",
  "Unlikely things to hear from a kindergarten teacher",
  "Unlikely things to hear from a lifeguard",
  "Unlikely things to hear from a yoga instructor",
  "Unlikely things to hear from a firefighter",
  "Unlikely things to hear from a pilot mid-flight",
  "Unlikely things to hear from mission control",
  "Unlikely things to hear at a nudist colony",
  "Unlikely things to hear from a wedding officiant",
  "Unlikely things to hear from your GPS",
  "Unlikely things to hear from your doctor right before surgery",
  "Unlikely things to hear from your dentist mid-procedure",
  "Unlikely things to hear from your therapist",
  "Unlikely things to hear from your financial advisor when the market crashes",
  "Unlikely things to hear from the tooth fairy",
  "Unlikely things to hear from a zombie",
  "Unlikely things to hear from a genie",
  "Unlikely things to hear from a scarecrow",
  "Unlikely things to hear from a ship captain as it sinks",
  "Unlikely things to hear from a fortune cookie",
  "Unlikely things to hear from a driving instructor on day one",
  "Unlikely things to hear from a personal trainer who hates their job",
  "Unlikely things to hear from a mall Santa",
  "Unlikely things to hear from a flight attendant mid-turbulence",
  "Unlikely things to hear from an ATM",
  "Unlikely things to hear from your shadow",
  "Unlikely things to hear from your conscience",
  "Unlikely things to hear on a nature documentary about humans",
  "Unlikely things to hear from a valet who dented your car",
  "Unlikely things to hear from a cemetery groundskeeper on Halloween",
  "Unlikely things to say when someone asks you to be a pallbearer",
  "Unlikely things to say when someone gives birth",
  "Unlikely things to say at your own wedding",
  "Unlikely things to say to a ghost",
  "Unlikely things to say to your parole officer",
  "Unlikely things to say after winning an Oscar",
  "Unlikely things to say at a job interview for Santa Claus",
  "Unlikely things to say when breaking up with someone",
  "Unlikely things to overhear in a confessional",
  "Unlikely things to hear at a gun range safety briefing",
  "Unlikely lines from a children's book",
  "Unlikely lines from a children's pop-up book",
  "Unlikely lines from a Hallmark Christmas movie",
  "Unlikely lines from a nature documentary",
  "Unlikely lines from a self-help book",
  "Unlikely lines from a marriage vow",
  "Unlikely lines from a motivational speaker who has given up",
  "Unlikely lines from a presidential inauguration speech",
  "Unlikely lines from a therapist who needs therapy",
  "Unlikely lines from a superhero origin story that didn't make the cut",
  "Unlikely lines from a spy who is also a terrible liar",
  "Unlikely lines from a pirate who just discovered the internet",
  "Unlikely lines from a book on positive thinking by a very negative person",
  "Unlikely lines from a fortune teller who only sees bad things",
  "Unlikely lines from a divorce lawyer's voicemail",
  "Unlikely lines from a self-checkout machine having an existential crisis",
  "Unlikely dialogue from a Disney villain",
  "Unlikely dialogue from a robot learning about love",
  "Things you shouldn't say during surgery",
  "Things you shouldn't say at a wedding",
  "Things you shouldn't say at a funeral",
  "Things you shouldn't say to your therapist",
  "Things you shouldn't say during a eulogy",
  "Things you shouldn't say while skydiving",
  "Things you shouldn't say while skydiving tandem",
  "Things you shouldn't say at your own intervention",
  "Things you shouldn't say at your own surprise party",
  "Things you shouldn't say when meeting the president",
  "Things you shouldn't say when someone asks you to hold their baby",
  "Things you shouldn't say to someone who just got a haircut you hate",
  "Things you shouldn't say while someone is getting a tattoo of your face",
  "Things you shouldn't say during a performance review if you want a raise",
  "Things you shouldn't say during a job interview that is going badly",
  "Things you shouldn't say to a new coworker on their first day",
  "Things you shouldn't say on your wedding day",
  "Things you shouldn't say on a first date",
  "Things you shouldn't say at a first date dinner",
  "Things you shouldn't say when someone tells you they are pregnant",
  "Things you shouldn't say when someone shows you their newborn baby",
  "Things you shouldn't say when someone proposes to you",
  "Things you shouldn't say when meeting your partner's parents for the first time",
  "Things you shouldn't say when someone names their kid something unusual",
  "Things you shouldn't say when someone announces a divorce",
  "Things you shouldn't say at a gender reveal when you already knew",
  "Things that would ruin a marriage proposal",
  "Things that would be wrong to say at a baptism",
  "Things you should never say to a police dog",
  "What the voices in Drew Carey's head are saying",
  "Unlikely personal ads",
  "Bad things to say at a job interview for a therapist",
  "Things you shouldn't say when you forgot your anniversary"
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function playBuzzer() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.5);
    gain.gain.setValueAtTime(0.7, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

function speakLine(text) {

  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.92;
  u.pitch = 1;
  u.volume = 1;
  window.speechSynthesis.speak(u);
}

export default function App() {
  const [remaining, setRemaining] = useState(() => shuffle(ALL_LINES));
  const [picked, setPicked] = useState(0);
  const [currentLine, setCurrentLine] = useState("");
  const [hasLine, setHasLine] = useState(false);
  const [log, setLog] = useState([]);
  const [done, setDone] = useState(false);

  const pull = useCallback(() => {
    if (remaining.length === 0) return;
    const next = [...remaining];
    const line = next.pop();
    setRemaining(next);
    setPicked(p => p + 1);
    setLog(l => [line, ...l]);
    setHasLine(false);
    setTimeout(() => {
      setCurrentLine(line);
      setHasLine(true);
      speakLine(line);
    }, 60);
    if (next.length === 0) setDone(true);
  }, [remaining]);

  const reset = useCallback(() => {
    setRemaining(shuffle(ALL_LINES));
    setPicked(0);
    setCurrentLine("");
    setHasLine(false);
    setLog([]);
    setDone(false);
  }, []);

  const pct = (picked / ALL_LINES.length) * 100;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#f0eee8",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem 4rem",
    }}>
      <div style={{ width: "100%", maxWidth: 660, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: "clamp(2.5rem, 10vw, 5rem)",
            color: "#f5c842",
            textShadow: "4px 4px 0 rgba(232,68,90,0.4)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}>Scenes From a Hat</div>
          <div style={{ fontSize: "0.75rem", color: "#555560", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.4rem" }}>
            Whose Line Is It Anyway? — Game Night Edition
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          {[["Remaining", remaining.length], ["Picked", picked], ["Total", ALL_LINES.length]].map(([label, val]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Arial Black', Impact, sans-serif", fontSize: "2rem", color: "#f5c842", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555560", marginTop: "0.2rem" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ width: "100%", height: 4, background: "#222230", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg,#e8445a,#f5c842)", borderRadius: 99, transition: "width 0.5s ease" }} />
        </div>

        {/* Card */}
        <div style={{
          width: "100%",
          background: "#13131a",
          border: hasLine ? "1px solid rgba(245,200,66,0.25)" : "1px solid #222230",
          borderRadius: 16,
          minHeight: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.3s",
        }}>
          {hasLine && (
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#e8445a,#f5c842)" }} />
          )}
          {hasLine ? (
            <>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5c842", marginBottom: "1rem" }}>SCENES FROM A HAT</div>
              <div style={{
                fontFamily: "'Arial Black', Impact, sans-serif",
                fontSize: "clamp(1.3rem, 4vw, 2.2rem)",
                lineHeight: 1.2,
                color: "#f0eee8",
              }}>{currentLine}</div>
            </>
          ) : (
            <div style={{ color: "#555560", fontSize: "1rem" }}>Hit the button to pull a line from the hat 🎩</div>
          )}
        </div>

        {/* Done banner */}
        {done && (
          <div style={{
            width: "100%",
            background: "linear-gradient(135deg,#e8445a,#f5c842)",
            color: "#0a0a0f",
            borderRadius: 12,
            padding: "1.5rem 2rem",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Arial Black', Impact, sans-serif", fontSize: "2rem" }}>Hat's Empty! 🎩</div>
            <div style={{ fontSize: "0.85rem", marginTop: "0.3rem", opacity: 0.8 }}>You've gone through every line. Reset to play again.</div>
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", width: "100%", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={pull}
            disabled={done}
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontSize: "1.1rem",
              padding: "0.9rem 2rem",
              borderRadius: 10,
              border: "none",
              cursor: done ? "not-allowed" : "pointer",
              background: "#f5c842",
              color: "#0a0a0f",
              opacity: done ? 0.35 : 1,
              flex: 1,
              maxWidth: 220,
              letterSpacing: "0.05em",
            }}
          >Pull From Hat</button>

          <button
            onClick={playBuzzer}
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontSize: "1.1rem",
              padding: "0.9rem 2rem",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: "#e8445a",
              color: "#fff",
              flex: 1,
              maxWidth: 220,
              letterSpacing: "0.05em",
            }}
          >🔔 BUZZ</button>

          <button
            onClick={reset}
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontSize: "1.1rem",
              padding: "0.9rem 2rem",
              borderRadius: 10,
              border: "1px solid #222230",
              cursor: "pointer",
              background: "transparent",
              color: "#555560",
              flex: 1,
              maxWidth: 220,
              letterSpacing: "0.05em",
            }}
          >Reset Hat</button>
        </div>

        {/* History */}
        {log.length > 1 && (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555560", marginBottom: "0.6rem" }}>Previously Pulled</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", maxHeight: 220, overflowY: "auto" }}>
              {log.slice(1, 21).map((line, i) => (
                <div key={i} style={{
                  background: "#13131a",
                  border: "1px solid #222230",
                  borderRadius: 8,
                  padding: "0.5rem 0.9rem",
                  fontSize: "0.85rem",
                  color: "#555560",
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "center",
                }}>
                  <span style={{ fontFamily: "'Arial Black', Impact, sans-serif", color: "#e8445a", opacity: 0.6, minWidth: "1.5rem" }}>#{picked - i - 1}</span>
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
              }
              
