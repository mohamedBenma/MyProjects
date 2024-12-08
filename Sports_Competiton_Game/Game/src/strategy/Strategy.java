package strategy;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.League;
import competition.Tournament;
import competitor.Competitor;
import match.RandomMatch;
import utils.MapUtil;

public abstract class Strategy{
	int winnerPerGroup;
	int nbrPlayersDrafted;
	int playersDraftedPos;
	public Strategy(int winnerPerGroup,int nbrPlayersDrafted,int playersDraftedPos) {
		this.winnerPerGroup=winnerPerGroup;
		this.nbrPlayersDrafted=nbrPlayersDrafted;
		this.playersDraftedPos=playersDraftedPos;
	}
	/**
	 * the number of players drafted to play the final stages
	 * @return the number of players drafted to play the final stages
	 */
	public int getNbrPlayersDrafted() {
		return this.nbrPlayersDrafted;
	}
	/**
	 * the position of the players who will be drafted
	 * @return 
	 */
	public int getPlayersDraftedPos() {
		return this.playersDraftedPos;
	}

	/**
	 * the number of players per pool who will qualify for the next round
	 * @return the number of players per pool who will qualify for the next round
	 */
	public int getWinnerpergroup() {
		return this.winnerPerGroup;
	}
	/**
	 * 
	 * @param poolgrps the different groups that have previously discussed the group stages 
	 * @return 
	 * @throws CompetitorsNumberNotPowerOfTwoException if the numbers of player
	 * return the final results of the final stages
	 */
	public  ArrayList<Competitor> getWinners(List<League> poolgrps){
		
		ArrayList<Competitor> winners=new ArrayList<>();
		
		for(League l:poolgrps) {
			int cpt=0;
				Set<Competitor> group = l.ranking().keySet();
				Iterator<Competitor> it = group.iterator() ;
				while(it.hasNext()&& cpt<this.getWinnerpergroup() ) {
					Competitor c=it.next();
					winners.add(c);
					cpt++;
				}	
		}
		if (this.getNbrPlayersDrafted()!=0) {
			System.out.println("-------- "+this.getNbrPlayersDrafted()+ " joueurs à repécher !--------" );
			ArrayList<Competitor> finalplayerSaved=new ArrayList<>();
			finalplayerSaved=this.DraftPlayers(poolgrps,this.getNbrPlayersDrafted(),this.getPlayersDraftedPos());
			for (Competitor comp:finalplayerSaved) {
				winners.add(comp);
			}
		}
		System.out.println("------ les qualifiés pour les phases finales sont --------: ");
		for (Competitor c:winners) {
			c.setNb_Points(0);
			System.out.println(c.getPlayer_Name());
			
		}
		return winners;
	
		
	}
	/**
	 * 
	 * @param lg leagues 
	 * @param nbrPlayers the number of players to be drafted 
	 * @param pos the position of the players to be drafetd 
	 * @return a list of drafted players 
	 */
	public ArrayList<Competitor>DraftPlayers (List<League> lg,int nbrPlayers,int pos){
		HashMap<Competitor,Integer> playerPosDrafted=new HashMap<Competitor,Integer>();
			for(League l:lg) {
				int cpt=0;
				Set<Competitor> group = l.ranking().keySet();
				Iterator<Competitor> it = group.iterator() ;
				while(it.hasNext()&& cpt<pos-1) {
					it.next();
					cpt++;
				}
				for(int i=cpt;i<cpt+1;i++) {
					playerPosDrafted.put(it.next(),it.next().getNb_Points());
				}
		}
			System.out.println("Joueurs en "+this.getPlayersDraftedPos()+ " eme position");
			for (Map.Entry<Competitor, Integer> entry : MapUtil.sortByDescendingValue(playerPosDrafted).entrySet()) {
				System.out.println(entry.getKey().getPlayer_Name()+"- "+entry.getValue());
			}
			
			ArrayList<Competitor> PlayersSaved=new ArrayList<>();
			Set<Competitor> group = MapUtil.sortByDescendingValue(playerPosDrafted).keySet();
			Iterator<Competitor> it = group.iterator() ;
			for(int i=0;i<this.getNbrPlayersDrafted();i++) {
				Competitor c=it.next();
				PlayersSaved.add(c);
				System.out.println(c.getPlayer_Name()+ " est repéché");
			}
			return PlayersSaved;
		}
	
}
