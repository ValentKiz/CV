import React from 'react';
import Divider from "../../shared/ui/myUI/Divider/Divider";
import './Sidebar.scss';

import photo from '../../shared/assets/photo.jpg';
// import List from "../../components/List/List";
import {Linkedin, Telegram, GitHub, Codewars, LeetCode, Email, Phone, Website, Adress} from "../../shared/assets/svg/icons";
import List from "../../shared/ui/myUI/List/List";

function Sidebar() {
	const contacts = [
		{name: "Email", url: "mailto: val.kizaev@gmail.com", descr: "val.kizaev@gmail.com", Logo: Email},
		{name: "Phone", url: "tel:+375445529272", descr: "+375(44)552-92-72", Logo: Phone},
		{name: "Address", url: "https://www.google.com/maps/place/Minsk/", descr: "Minsk, Belarus", Logo: Adress},
		{name: "Rabota.by", url: "https://rabota.by/resume/bbfaa009ff09e676830039ed1f677a57454a48", descr: "link", Logo: Website},
	]

	const socials = [
		{name: "Telegram", url: "https://t.me/valikvalek", descr: "@valikvalek", Logo: Telegram},
		{name: "LinkedIn", url: "http://linkedin.com/in/valent-kizaev", descr: "valent-kizaev", Logo: Linkedin},
		{name: "GitHub", url: "https://github.com/ValentKiz/", descr: "ValentKiz", Logo: GitHub},
		{name: "Codewars", url: "https://www.codewars.com/users/ValikValek/", descr: "ValikValek", Logo: Codewars},
		{name: "LeetCode", url: "https://leetcode.com/ValentKiz/", descr: "ValentKiz", Logo: LeetCode}
	]

	const languages = [
		{name: "English", descr: "B1", level: "50%"},
		// {name: "Belorussian", descr: "Native"},
		{name: "Russian", descr: "Native", level: "100%"}
	]

	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<img src={photo} className="sidebar__photo" alt="photo" />
				<h1 className="sidebar__name">Valentin Kizaev</h1>
				<h2 className="sidebar__role">Frontend Developer</h2>
				<p className="sidebar__age">27 y.o</p>
			</div>
			<Divider />
			<List Tag='ul' title="Contacts" items={contacts} />
			<Divider />
			<List title="Socials" items={socials} />
			<Divider />
			<List title="Languages" items={languages} />
			<div className="rectangle rect1"></div>
			<div className="rectangle rect2"></div>
			<div className="rectangle rect3"></div>
			<div className="rectangle rect4"></div>
			<div className="rectangle rect5"></div>
			<div className="rectangle rect6"></div>
			<div className="rectangle rect7"></div>
		</aside>
	)
}

export default Sidebar
