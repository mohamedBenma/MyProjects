package match.matchobserver;

import java.util.HashMap;
import java.util.List;

import competitor.Competitor;
import match.Match;

public class BookMaker implements MatchObserver {
	HashMap<Competitor,Integer> compBettingOdds=new HashMap<>();
	String name;
	public BookMaker(String name) {
		this.name=name;
	}
	
	/**
	 * 
	 * @return the bookmaker's name
	 */
	public String getName() {
		return name;
	}

 

	/**
	 * 
	 * @return the competitors associated to their betting odds
	 */
	public HashMap<Competitor, Integer> getCompBettingOdds() {
		return compBettingOdds;
	}


	@Override
	public void ObserverReact(Match match) {
		Competitor c1=match.getC1();
		Competitor c2=match.getC2();
		Competitor winner=match.getWinner();
		competitorIsIncompBettingOdds(c1);
		competitorIsIncompBettingOdds(c2);
		System.out.println("-----les nouvelles cotes viennent de tomber !!-----" +"("+this.getName()+")");
		if (winner==c1) {
			this.decreaseCompBettingOdds(c1);
			this.increaseCompBettingOdds(c2);
			System.out.println("Cote de "+c1.getPlayer_Name()+":"+ this.getCompBettingOdds().get(c1));
			System.out.println("Cote de "+c2.getPlayer_Name()+":"+ this.getCompBettingOdds().get(c2));
		}
		else {
			this.decreaseCompBettingOdds(c2);
			this.increaseCompBettingOdds(c1);
			System.out.println("Cote de "+c1.getPlayer_Name()+":"+ this.getCompBettingOdds().get(c1));
			System.out.println("Cote de "+c2.getPlayer_Name()+":"+ this.getCompBettingOdds().get(c2));
		}
		
	}
	/**
	 * verify if a competitor is already in the bettingodds list
	 * @param c a competitor
	 */
	public void competitorIsIncompBettingOdds(Competitor c) {
		if (!this.getCompBettingOdds().containsKey(c)) {
			this.getCompBettingOdds().put(c, 1);
			
		}
	}
	/**
	 * decrease the betting odd's value of a competitor 
	 * @param c a Competitor
	 */
	public void decreaseCompBettingOdds(Competitor c) {
		int i=this.getCompBettingOdds().get(c);
		if (i>=2) {		
			this.getCompBettingOdds().put(c,i-1);
	}
	}
	/**
	 * increase the betting odd's value of a competitor 
	 * @param c a Competitor
	 */
	public void increaseCompBettingOdds(Competitor c) {
			int i=this.getCompBettingOdds().get(c);	
			this.getCompBettingOdds().put(c,i+1);
		}		
}	


