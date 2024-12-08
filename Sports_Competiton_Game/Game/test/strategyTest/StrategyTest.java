package strategyTest;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import competition.League;
import competitor.Competitor;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import strategy.Strategy;

public abstract class StrategyTest{
	protected Strategy myStrategy;
	protected abstract Strategy createStrategy(int winnerPerGroup,int nbrPlayersDrafted,int playersDraftedPos);
	protected List<Competitor> comp_list1;
	protected List<Competitor> comp_list2;
	protected List <League> leagues;
	protected RandomMatch m;
@BeforeEach
public void init(){
	ArrayList<MatchObserver>mo=new ArrayList<>();
	mo.add(new Journalist("frederic"));
	mo.add(new BookMaker("bet"));
	Competitor c1=new Competitor("mohamed");
	Competitor c2=new Competitor("ghani");
	Competitor c3=new Competitor("malcolm");
	Competitor c4=new Competitor("nelson");
	Competitor c5=new Competitor("lucas");
	Competitor c6=new Competitor("mazigh");
	Competitor c7=new Competitor("stones");
	Competitor c8=new Competitor("julien");
	comp_list1=new ArrayList<>();
	comp_list2=new ArrayList<>();
	leagues=new ArrayList<>();
	c1.setNb_Points(4);
	comp_list1.add(c1);
	c2.setNb_Points(0);
	comp_list1.add(c2);
	c3.setNb_Points(3);
	comp_list1.add(c3);
	c4.setNb_Points(2);
	comp_list1.add(c4);
	c5.setNb_Points(0);
	comp_list2.add(c5);
	c6.setNb_Points(4);
	comp_list2.add(c6);
	c7.setNb_Points(2);
	comp_list2.add(c7);
	c8.setNb_Points(1);
	comp_list2.add(c8);
	League est=new League(comp_list1,mo);
	League ouest=new League(comp_list2,mo);
	leagues.add(est);
	leagues.add(ouest);
	this.myStrategy=this.createStrategy(0, 0, 0);
	}


@Test
public void getWinnersTest() {
	ArrayList<Competitor> winners=new ArrayList<>();
	winners=this.myStrategy.getWinners(leagues);
	int finalStagesPlayersnbr=this.myStrategy.getWinnerpergroup();
	assertEquals(finalStagesPlayersnbr*this.leagues.size()+this.myStrategy.getNbrPlayersDrafted(),winners.size());
	Boolean finalStagesPlayersnbrIsPowerOfTwo= (winners.size()!=0) && ((winners.size()&(winners.size()-1))==0);
	assertTrue(finalStagesPlayersnbrIsPowerOfTwo);
	Map<Competitor,Integer> l=new HashMap<>();
	l=this.leagues.get(0).ranking();
	Set<Competitor> group = l.keySet();
	Iterator<Competitor> it = group.iterator() ;
	assertTrue(winners.contains(it.next()));

}
@Test
public void DraftPLayersTest() {
	List<Competitor> drafted=new ArrayList<Competitor>();
	int playersToDraft=this.myStrategy.getNbrPlayersDrafted();
	int playersToDrfatPos=this.myStrategy.getPlayersDraftedPos();
	drafted=this.myStrategy.DraftPlayers(this.leagues, playersToDraft, playersToDrfatPos);
	assertEquals(drafted.size(),this.myStrategy.getNbrPlayersDrafted());
}


}