import type { FC } from "react";

import { useEffect } from "react";

const IndexPage: FC = () => {
    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3001");
        const sendFirstMessageToServer = () => {
            socket.send(
                JSON.stringify({
                    event: "message",
                    data: "initial message",
                })
            );
        };

        socket.addEventListener("message", ({ data }) => {
            console.info("Client received message", data);
        });

        socket.addEventListener("open", sendFirstMessageToServer);
        if (socket.readyState === WebSocket.OPEN) sendFirstMessageToServer();

        return () => {
            socket.close();
        };
    }, []);

    return <h1>Hello Next.js 👋</h1>;
};

export default IndexPage;
