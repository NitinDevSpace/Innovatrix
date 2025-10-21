import { axiosInstance } from ".";

export const BuilderRegister = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/builder", payload);
        return response.data;
        
    } catch (error) {
        console.log("Error Registering Builder: ", error);
        
        
    }
    
}