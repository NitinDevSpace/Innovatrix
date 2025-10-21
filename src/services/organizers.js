import { axiosInstance } from ".";

export const OrganizerRegister = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/organizer", payload);
        return response.data;
        
    } catch (error) {
        console.log("Error Registering Organizer: ", error);
        
        
    }
    
}