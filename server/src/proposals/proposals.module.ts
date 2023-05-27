import { Module } from '@nestjs/common';
import { ProposalsService } from './proposals.service';
import { ProposalsController } from './proposals.controller';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { proposalSchema } from './schema/proposals.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Proposal', schema: proposalSchema }]),
  ],
  providers: [ProposalsService],
  controllers: [ProposalsController],
})
export class ProposalsModule {}
