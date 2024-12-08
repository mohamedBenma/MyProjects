package competititonTest;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import competition.League;
import competition.Master;
import competition.MasterCannotBeOrganized;
import competitor.Competitor;
import match.Match;
import match.matchobserver.MatchObserver;
import strategy.Strategy;

public class MockMaster extends Master {

	public MockMaster(List<Competitor> competitors,Strategy strategy, int nbr_pools,ArrayList<MatchObserver> observers)throws MasterCannotBeOrganized {
		
		super(competitors,strategy, nbr_pools,observers);
	}
	public void emptypoolsCreate() {
		if (this.getCompetitors().size() % this.getNbr_pools()==0){/*gerer à l'aide d'une exception*/
		for(int i=0;i<this.getNbr_pools();i++) {
			this.pools.put(i, new ArrayList<Competitor>());
		} 
		} 
	}
	public void formationPools() {
		int i=0;
		Iterator<Competitor> it=this.getCompetitors().iterator();
			while(it.hasNext()) {
			this.pools.get(i).add(it.next()); 
			i=(i+1)%this.getNbr_pools();
		}
	}
	public void addLeagues(){
		Set<Integer> keys = this.pools.keySet() ;
		Iterator<Integer> it = keys.iterator() ;
		while (it.hasNext()) {
			int x = it.next(); 
			this.leagues.add(new League(this.pools.get(x),observers));
		}
	}
	

}
