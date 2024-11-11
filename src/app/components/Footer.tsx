import Image from "next/image";
import main from "../../../Public/images/main.jpg"
import tslogo from "../../../Public/images/tslogo.png"
import pcard1netflix from "../../../Public/images/pcard1netflix.png"
import discord from "../../../Public/images/discordlogoprojects.png"
import amazonlogo from "../../../Public/images/amazonlogo.png"
export default function Footer() {
    return (
       <div className="Footer-section">
        <div className="panel">
            <p className="p-1-panel">building creative solutions into engaging,<br />
                <span>user-friendly web applications that bring visions to life.</span></p>
        </div>
        <div className="footer">
            <div className="footer-icons">
            <i className="bi bi-linkedin  one "></i>
            <i className="bi bi-github    two"></i>
            </div>
            <p className="footer-p-2">Copyright © 2024 Muhammad Moiz</p>
        </div>
       </div>



    );
}