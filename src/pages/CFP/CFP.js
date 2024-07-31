import React, { Component } from "react";
import "./CFP.scss";
export default class CFP extends Component {
static displayName = "CFP";
render() {
return (
<div className="con-page">
	<div className="text-area">
		<h4 className='closed-text'>The 2025 Call for Papers will be open soon!</h4>
		{/* <div>
		<p className="tab-paragraph">TL;DR - submit via  {" "}
			<a
				href="https://forms.gle/hUdJG1FNGtvJZu1u6"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			this form
			</a> (but you really should read the instructions). 
		</p>
		<p className="tab-paragraph">
			The Kernelcon Crew is soliciting presentations for the sixth annual Kernelcon held at the Downtown Embassy Suites in Omaha, NE, April 2-5, 2024.
		</p>
		<p className="tab-paragraph">
			Create something fun in your homelab? Develop a new technique? Wish you could spare someone the horrors you faced? Impart your wisdom, start the difficult conversations, submit your work to our CFP!
		</p>
		<p className="tab-paragraph">
			As you plan your submission, feel free to peruse the{" "}
			<a
				href="http://2019.kernelcon.org/agenda"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			2019</a>,{" "}
			<a
				href="https://2020.kernelcon.org/agenda#schedule"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			2020</a>,{" "}
			<a
				href="http://2022.kernelcon.org/agenda"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			2022</a>,{" "}
			or the{" "}
			<a
				href="http://2023.kernelcon.org/agenda"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			2023</a>{" "}programs{""}.
		</p>
		<p className='tab-heading'>Important Dates</p>
		<p className="tab-paragraph">
			Important dates regarding CFP can be found on our{" "}
			<a
				href="/dates"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			important dates page
			</a>
			, which will always have the most current information. Make sure to pay attention to that page to ensure you don't miss the CFP closing date!
		</p>
		<p className='tab-heading'>Suggested topic areas</p>
		<p className="tab-paragraph">The theme for Kernelcon 2024, is “AI” (note, this does not, exclusively, mean "artificial intelligence"). Accordingly, those that wish to tailor a talk to the theme or require a broad topic to start the creative engine toward a new talk, "AI" is your starting point. Consider Artificial Intelligence, but also Audio Interfaces, All Inclusive talks, maybe event DIY Astronomical Interferometers. However, adopting the theme is not a hard requirement.  Do not let these directions limit your creativity, interpretation, or the subject of your talk.</p>
		<p className="tab-paragraph">Kernelcon submissions should focus on topics that are of interest to the security and hacking communities. The list below is meant as a guideline, not an exhaustive list.</p>
		<p className="tab-paragraph">
		<ul className="real-bullet-list">
			<li>Hacking of Software/Hardware</li>
			<li>Incident Response</li>
			<li>Operational Security</li>
			<li>Computing Hardware Security, Repurposing, Designing/Building</li>
			<li>Technology Policy and Politics (yep, we're willing to go there)</li>
			<li>Security Education</li>
			<li>Security and Hacking Capture-the-Flag Topics</li>
			<li>Security Automation</li>
			<li>Digital Forensics</li>
			<li>Bug Bounties</li>
			<li>Application Security</li>
			<li>Secure Development Practices / DevSecOps / SecDevOps</li>
			<li>Security Aspects of Cloud Computing</li>
			<li>Practical Security</li>
			<li>Machine Learning (securing, and using for security)</li>
			<li>War Stories, Histories, Scientific Advancement, Trade, etc. of Kernels</li>
			<li>Security Metrics (Inform Risk Analysis, Identify Priorities, Measure Progress, etc)</li>
			<li>Risk Management</li>
			<li>BeyondCorp / Zerotrust models in practice</li>
			<li>Privacy and Anonymity</li>
			<li>Identity & Access Management</li>
			<li>Focused Security Research (Visualization, IoT, Vehicles, Toys, Web apps, etc)</li>
		</ul>
		</p>
		<p className="tab-paragraph">If your talk doesn't fit precisely into one of these areas, the theme, but you still think is a good fit, please submit it for consideration! The suggested topics are meant only to provide some direction, not as a strict pedantic gate through which all submissions must pass.</p>
		<p className='tab-heading'>Conference format</p>
		<p className="tab-paragraph">Kernelcon 2024 will have two, concurrent main tracks, and talks should fit into a 60 (FULL) or 20 (SHORT) minute timeslot (meaning a 50 or 15 minute presentation is expected). As one might expect, presenters will be positioned at the front of a hotel conference area, and will present using typical conference equipment.</p>
		<p className='tab-heading'>Speaker Benefits</p>
		<p className="tab-paragraph">Speakers receive complimentary admission to Kernelcon and will be recognized as a speaker via a special “SPEAKER” badge. Speakers also have the option of attending an exclusive speaker party preceding the conference. Details will be sent to accepted speakers following acceptance notification.</p>
		<p className="tab-paragraph">For each FULL talk, the speakers may additionally select one of:</p>
		<p className="tab-paragraph">
		<ul className="real-bullet-list">
			<li>2 additional “HACKER” registrations</li>
			<li>$200 donation to the EFF or Hackers for Charity</li>
			<li>$200 honorarium</li>
			<li>Please reinvest into making Kernelcon even better next year</li>
		</ul>
		</p>
		<p className="tab-paragraph">We may also tentatively accept backup/alternate talks which will not be guaranteed a speaking slot, but will receive admission in order to be ready to present in the event they are needed.</p>
		<p className='tab-heading'>Review process</p>
		<p className="tab-paragraph">Our review process is not as formal as some academic conferences. However, submissions are considered confidential and are not shared outside of the Technical Program Committee. Every submission is reviewed by multiple committee members and weighed for inclusion in the program. TPC Committee members are selected for the ability to provide valuable reviews, handle sensitive information, and remain fair, impartial, and consistent in the review process. Ultimately the committee informs the TPC Chair(s) who set the technical portion of the program that is married with the rest of Kernelcon agenda.</p>
		<p className='tab-heading'>How to submit</p>
		<p className="tab-paragraph">Speakers should submit directly (e.g. no PR representatives are permitted).</p>
		<p className="tab-paragraph">Information you'll need to have handy for your submission:
		<ul className="real-bullet-list no-bullets">
			<li><input className="fake-checkbox" type="checkbox"/>Speaker name(s)</li>
			<li><input className="fake-checkbox" type="checkbox"/>Speaker Name(s), Pseudonym(s), or handle(s) </li>
			<li><input className="fake-checkbox" type="checkbox"/>Contact information (email, twitter, phone, etc - if we need to reach you and we can't, that's on you) *</li>
			<li><input className="fake-checkbox" type="checkbox"/>Speaker promotion information (twitter, facebook, etc) - if we want to promote your talk specifically, and you want us to tag you</li>
			<li><input className="fake-checkbox" type="checkbox"/>Presentation Title</li>
			<li><input className="fake-checkbox" type="checkbox"/>Decide if you'd like your submission to be presented to the program committee anonymously for review</li>
			<li><input className="fake-checkbox" type="checkbox"/>Read "Grant of Copyright Use" and "Speaker Terms" copied and completed from below</li>
			<li><input className="fake-checkbox" type="checkbox"/>URL for any optional supplementary files (URL because you're sharing them with us)</li>
			<li><input className="fake-checkbox" type="checkbox"/>Timeslot (20 or 60 minutes)</li>
			<li><input className="fake-checkbox" type="checkbox"/>Abstract of your presentation (1200 characters or less) **</li>
			<li><input className="fake-checkbox" type="checkbox"/>Speaker Bio (500 characters or less)</li>
			<li><input className="fake-checkbox" type="checkbox"/>Technical Level of talk: on a 1 (none) to 5 (all the way down the rabbit hole) scale</li>
			<li><input className="fake-checkbox" type="checkbox"/>Detailed Description: <span className="text-highlight">the most important part</span> of your submission. You need to provide detailed information that demonstrates your knowledge of your topic and how you will present it to the audience. Do not rely on your abstract to be enough for the reviewers. It isn’t. If your talk will include demos, new exploits, tool releases or audience interactions, please include details.</li>
			<li><input className="fake-checkbox" type="checkbox"/>Why do you feel this submission is a good fit for Kernelcon?</li>
			<li><input className="fake-checkbox" type="checkbox"/>List of other venues or where this work has been presented, published or derived from</li>
			<li><input className="fake-checkbox" type="checkbox"/>Are you a potential first time conference speaker?</li>
			<li><input className="fake-checkbox" type="checkbox"/>List of facilities requested beyond what is already provided (power, projector, podium, sound projection, and internet connectivity).</li>
			<li><input className="fake-checkbox" type="checkbox"/>Press can contact you: yes or no</li>
			<li><input className="fake-checkbox" type="checkbox"/>For FULL talks, honorarium choice: Donate (EFF or HFC), Registrations (2), Cash, Reinvest</li>
		</ul>
		</p>
		<p className="tab-paragraph">Incomplete or misformatted submissions greatly reduce the likelihood of your talk being accepted.</p>
		<p className="tab-paragraph">Novel, new, on-topic talks receive the most preference. Submissions by first-time presenters are not discounted in any way. Quite the opposite! First-timers are whole-heartedly encouraged to submit. Blatant vendor pitches, recycled talks, presentations on well-known topics that are *not* depicted as 101 or intro, are unlikely to be accepted. We expect presentations that are considerate, planned, thought-out, and delivered well. All talks are considered on their merits. Everyone, including sponsors, internet legends, cultural icons, and Dave Kennedy must submit just like all other speakers.</p>
		<p className="tab-paragraph">For 2024 we've moved to a form based CFP submission system rather than the email and PDF based system used prior.  Such a system allows for more automation on our end, but also addresses some feedback we've heard from authors, such as the ability to edit submissions.</p>
		<p className="tab-paragraph">Submissions are collected by {" "}
			<a
				href="https://forms.gle/hUdJG1FNGtvJZu1u6"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			form
			</a>{""}. If you run into issues, or have questions inquire at {" "}
			<a
				href="mailto:cfp@kernelcon.org"
				className="text-highlight"
				rel="noopener noreferrer"
				target="_blank">
			cfp@kernelcon.org
			</a>{""}.
		</p>
		<p className="tab-paragraph">Supplementary files such as draft slides, extended outlines, and whitepapers may help your submission and may also be included via URL (i.e. dropbox, drive, onedrive).</p>
		<p className='tab-heading'>Grant of Copyright Use</p>
		<p className="tab-paragraph">I warrant that the above work has not been previously published elsewhere, or if it has, that I have obtained permission for its publication by Kernelcon and that I will promptly supply Kernelcon with wording for crediting the original publication and copyright owner. If I am selected for presentation, I hereby give Kernelcon permission to duplicate, record, and redistribute this presentation, which includes, but is not limited to, any conference proceedings, conference CD, video, audio, and handouts to the conference attendees for educational, on-line, and all other purposes.</p>
		<p className="tab-paragraph">By submitting your talk proposeal, you agree to the Grant of Copyright Use.</p>
		<p className='tab-heading'>Terms of Speaking Requirements</p>
		<p className="tab-paragraph">
		<ol className="real-bullet-list">
			<li>I will submit a completed presentation, a copy of the tool(s) and/or code(s), and a reference to all of the tool(s), law(s), web sites and/or publications referenced at the end of my talk and as described in this CFP submission for publication by Kernelcon.</li>
			<li>I will submit any revisions to the originally submitted Title, Abstract and Biography for the Kernelcon website and printed conference materials by March 4, 2024.</li>
			<li>I will complete my presentation within the time allocated to me - not running over, or excessively under, the time allocation.</li>
			<li>I understand that the Kernelcon venue will provide 1 projector feed, microphone(s), wired and/or wireless Internet. I understand that I am responsible for providing all other necessary equipment, including laptops and machines, to complete my presentation.</li>
			<li>I understand that I will be responsible for my own hotel and travel expenses.</li>
		</ol>
		</p>
		<p className="tab-paragraph">By submitting your talk proposeal, you agree to the Terms of Speaking.</p>
		</div> */}
	</div>
</div>
);
}
}