import StoreProvider from "../redux-toolkit/StoreProvider";
import "./globals.css";

export const metadata = {
  title: "Felix Arts",
  description: "Felix Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
