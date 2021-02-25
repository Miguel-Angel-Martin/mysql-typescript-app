import bcrypt from 'bcryptjs';

export async function encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

}
/* const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};
export default encryptPassword; */

export async function validatePassword(password: string, password2: string): Promise<boolean> {
    return await bcrypt.compare(password, password2);
}
