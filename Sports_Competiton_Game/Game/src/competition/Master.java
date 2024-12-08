package competition;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import strategy.Strategy;

public class Master extends Competition {
	private Strategy strategy;
	protected Map<Integer,ArrayList<Competitor>> pools;
	protected ArrayList<League> leagues;
	protected Tournament finalStages;  
	private int nbr_pools;
	public Master(List<Competitor> competitors,Strategy strategy,int nbr_pools,ArrayList<MatchObserver> observers) throws MasterCannotBeOrganized {
		super(competitors,observers); 
		this.strategy=strategy; 
		this.nbr_pools=nbr_pools;
		this.pools=new HashMap<Integer,ArrayList<Competitor>>();
		this.leagues=new ArrayList<League>(); 
		int finalPhasePlayers;
		finalPhasePlayers=this.strategy.getWinnerpergroup()*this.nbr_pools+this.strategy.getNbrPlayersDrafted();
		if(!IsPowerOfTwo(finalPhasePlayers)|| this.getNbr_pools()>=this.getCompetitors().size()|| this.getCompetitors().size()%this.getNbr_pools()!=0) {
			throw new MasterCannotBeOrganized("la competition ne peut pas etre organisée avec cette strategie");
		}
		System.out.println(this.mR.getMatchObservers().size());
	}
	protected void play(List<Competitor> competitors){
		this.emptypoolsCreate();
		this.formationPools();
		this.addLeagues();
		this.groupStagePlay();
		int cpt=1;
		for (League l:this.getLeagues()) {
			System.out.println("Classement du Groupe "+ cpt+" :");
			for (Map.Entry<Competitor, Integer> entry : l.ranking().entrySet()) {
				System.out.println(entry.getKey().getPlayer_Name()+"- "+entry.getValue());
			}
			cpt++;
		}
		try {
			ArrayList<Competitor>qualified=new ArrayList<>(); 
			qualified=this.getStrategy().getWinners(this.getLeagues());
			
			this.finalStages=new Tournament(qualified,observers);
			this.finalStages.play();
			for (Map.Entry<Competitor, Integer> entry : this.finalStages.ranking().entrySet()) {
				System.out.println(entry.getKey().getPlayer_Name()+"- "+entry.getValue());
	}
	}
	catch(Exception e) {
		System.out.println("le nombre de joueurs qualifiés aux phases finales n'est pas une puissance de 2!!!!");
	}
				
	}
	/**
	 * 
	 * @return the strategy(method) used to play matches and 
	 * choose the number of player who will qualify for the next round
	 */
	public Strategy getStrategy() {
		return this.strategy;
	}
	/**
	 * 
	 * @return the formed groups(pools)
	 */
	public Map<Integer, ArrayList<Competitor>> getPools() {
		return this.pools;
	}
	/**
	 * 
	 * @return the number of pools chosen by the user
	 */
	public int getNbr_pools() {
		return nbr_pools;
	}
	/**
	 * it allows us to form the empty goups(pools)
	 */
	public void emptypoolsCreate() {
		if (this.getCompetitors().size() % this.getNbr_pools()==0){/*gerer à l'aide d'une exception*/
		for(int i=0;i<nbr_pools;i++) {
			this.pools.put(i, new ArrayList<Competitor>());
		}
		}
	}
	/**
	 * add players to the different groups that we have already created
	 */
	public void formationPools() {
		int i=0;
		Iterator<Competitor> it=this.getCompetitors().iterator();
			while(it.hasNext()) {
			this.pools.get(i).add(it.next()); 
			i=(i+1)%this.getNbr_pools();
		}
	}
	/**
	 * create leagues in order to organize group stages matches
	 */
	public void addLeagues(){
		Set<Integer> keys = this.pools.keySet() ;
		Iterator<Integer> it = keys.iterator() ;
		while (it.hasNext()) {
			int x = it.next(); 
			this.leagues.add(new League(this.pools.get(x),observers));
		}
	}

	/**
	 * @return the groups organized into leagues 
	 */
	public ArrayList<League> getLeagues() {
		return leagues;
	}
	/**
	 * it allows to organize and play the group stages
	 * @throws CompetitorsNumberNotPowerOfTwoException
	 */
	public void groupStagePlay() {
		for(League l:leagues) {
			l.play();
		}
	} 
	
}
