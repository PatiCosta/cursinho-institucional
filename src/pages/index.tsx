import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Inicio() {  
  const { push } = useRouter();

  useEffect(() => {
      push('/home');
  }, []);
  return <p></p>;
}
