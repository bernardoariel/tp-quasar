import { computed } from 'vue'
import { useStore } from 'vuex';


export const useUI = () =>{

    const store = useStore()

    return {
        // sideMenuOpen: computed( ()=>store.getters['ui/isSideMenuOpen']),
        sideMenuOpen: computed({
            get(){
                return store.getters['ui/isSideMenuOpen']
            },
            set(val){
                console.log(val)
                store.commit('ui/toggleSideMenu')
            }
        }),
        toggleSideMenu(){store.commit('ui/toggleSideMenu')}
    }
}

export default useUI