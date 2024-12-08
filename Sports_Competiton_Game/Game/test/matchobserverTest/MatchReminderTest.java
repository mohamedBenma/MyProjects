package matchobserverTest;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import competitor.Competitor;
import match.Match;
import match.RandomMatch;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchReminder;

public class MatchReminderTest {
	protected MatchReminder mr;
	
	
@BeforeEach
public void init() {
	this.mr=new MatchReminder();
}
	@Test
	public void registerandunregisterTest() {
		Journalist j=new Journalist("fifo");
		int mr_size=this.mr.getMatchObservers().size();
		assertEquals(this.mr.getMatchObservers().size(),0);
		this.mr.register(j);
		assertEquals(this.mr.getMatchObservers().size(),mr_size+1);
		assertTrue(this.mr.getMatchObservers().contains(j));
		this.mr.unRegister(j);
		assertEquals(this.mr.getMatchObservers().size(),mr_size);
	}
	@Test
	public void MatchRemindTest() {
		BookMaker bk=new BookMaker("bet");
		Journalist j=new Journalist("fifo");
		Competitor c1=new Competitor("mohamed");
		Competitor c2=new Competitor("el ghani");
		Match m=new RandomMatch(c1,c2);
		assertEquals(bk.getCompBettingOdds().size(),0);
		this.mr.getMatchObservers().add(bk);
		this.mr.getMatchObservers().add(j);
		m.OrganizeMatch();
		this.mr.MatchRemind(m);
		assertEquals(bk.getCompBettingOdds().size(),2);
		int cote_c1=bk.getCompBettingOdds().get(c1);
		int cote_c2=bk.getCompBettingOdds().get(c2);
		assertTrue(cote_c1==2||cote_c2==2);
	}

	}
	
