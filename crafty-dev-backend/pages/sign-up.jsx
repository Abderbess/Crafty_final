
// import { useState } from 'react';
// import axios from '../utils/axios';

// export default function SignUp() {
//     const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('/users/register', formData);
//             alert('Inscription réussie');
//         } catch (err) {
//             console.error(err);
//             alert('Erreur lors de l'inscription');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Nom"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
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
//             <button type="submit">S'inscrire</button>
//         </form>
//     );
// }
