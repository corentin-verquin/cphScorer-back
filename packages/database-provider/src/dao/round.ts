import { RoundProvider } from '@cph-scorer/core'
import { Round } from '@cph-scorer/model'
import { Repository } from 'typeorm'
import { RoundEntity } from '../entity/round'

export class RoundDao implements RoundProvider {
  constructor (private readonly roundRepository: Repository<RoundEntity>) { }

  public async insert (roundNumber: number): Promise<Round> {
    const round = new RoundEntity()
    round.roundNumber = roundNumber
    return (await this.roundRepository.save(round)).toRound()
  }

  public async getRound (roundNumber: number): Promise<Round> {
    return (await this.roundRepository.findOneOrFail({
      relations: ['matchs'],
      where: { roundNumber }
    })).toRound()
  }
}
