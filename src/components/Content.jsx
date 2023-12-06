import { Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

export default function Content() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Splash />
            <Projects limit={4} />
          </>
        }
      />

      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
