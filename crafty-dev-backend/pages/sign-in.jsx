
// import { useState } from 'react';
// import axios from '../utils/axios';

// export default function SignIn() {
//     const [formData, setFormData] = useState({ email: '', password: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/users/login', formData);
//             alert(`Bienvenue, ${response.data.name}`);
//         } catch (err) {
//             console.error(err);
//             alert('Erreur lors de la connexion : Email ou mot de passe incorrect');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//             <input
//                 type="password"
//                 placeholder="Mot de passe"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             />
//             <button type="submit">Se connecter</button>
//         </form>
//     );
// }
