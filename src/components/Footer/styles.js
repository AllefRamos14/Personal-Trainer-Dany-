import styled from "styled-components";

export const Footer = styled.div`


    background: #1A1A1A;
    padding: 48px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:24px;


            .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: var(--rose);
}

        .footer-logo span {
    color: var(--gold);
    font-style: italic;
}

        .footer-text {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.4);
}

        .footer-links {
    display: flex;
    gap: 24px;
}

        .footer-links a {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.45);
    text-decoration: none;
    cursor: pointer;
    transition: color .2s;
}

        .footer-links a:hover {
    color: var(--rose);
}


`;
