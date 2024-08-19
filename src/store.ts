import { create } from "zustand";

interface IZustandState {
  isAuthorized: boolean;
  setIsAuthorized: (isAuthorized: boolean) => void;
}

const useStore = create<IZustandState>((set) => ({
  isAuthorized: true,
  setIsAuthorized: (isAuthorized: boolean) =>
    set({ isAuthorized: isAuthorized }),
}));

export default useStore;
