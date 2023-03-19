import React from "react";

function Footer() {
    var today = new Date();
    var now = today.getFullYear();
    return <footer><p>Copyright ⓒ {now}</p></footer>;
}

export default Footer;