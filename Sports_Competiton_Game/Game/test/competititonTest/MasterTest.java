package competititonTest;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;

import competition.Competition;
import competition.CompetitorsNumberNotPowerOfTwoException;
import competition.Master;
import competition.MasterCannotBeOrganized;
import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.MatchObserver; 
import strategy.Strategy;
import strategy.Strategy1PerGroup;

public class MasterTest extends CompetitionTest {
 MockMaster mock;
 Master master;
 protected Competition createCompetition(List<Competitor> list_comp, ArrayList<MatchObserver> ob) {
	 
 try {
 	this.mock=new MockMaster(list_comp,new Strategy1PerGroup(),2,ob);

 	this.master=new Master(list_comp,new Strategy1PerGroup(),2,ob);
 } 
 catch (MasterCannotBeOrganized e) {
 	e.printStackTrace();
 }
 return this.master;
 }

@Test
public void emptypoolsCreate() {
	this.mock.emptypoolsCreate();
	assertEquals(this.mock.getPools().size(),this.mock.getNbr_pools());
}
@Test
public void getStrategyTest() {
	Strategy strat;
	strat=this.mock.getStrategy();
	assertEquals(strat.getWinnerpergroup(),1);
}
@Test
public void formationPoolsTest() {
	this.mock.emptypoolsCreate();
	this.mock.formationPools();
	int lastpoolsize= this.mock.getPools().get(this.mock.getNbr_pools()-1).size();
	int firstpoolsize= this.mock.getPools().get(0).size();
	assertTrue(lastpoolsize!=0);
	assertEquals(lastpoolsize,firstpoolsize);
}
@Test
public void addLeagues() {
	Map<Competitor,Integer>league=new HashMap<Competitor,Integer>();
	this.mock.emptypoolsCreate();
	this.mock.formationPools();
	assertEquals(this.mock.getLeagues().size(),0);
	this.mock.addLeagues();
	assertFalse(this.mock.getLeagues().size()==0);
	int league1_size= this.mock.getLeagues().get(0).getCompetitors().size();
	int leagueLast_size= this.mock.getLeagues().get(this.mock.getNbr_pools()-1).getCompetitors().size();
	assertEquals(league1_size,leagueLast_size);	
}
}


