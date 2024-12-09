import { ReactNode } from 'react';

type props = {
  children: ReactNode
}

export default function Section({ children }: props) {
  return (
    <section className="section">
      {children}
    </section>
  );
}
